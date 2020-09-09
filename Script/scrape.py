import PyPDF4

pdfObject = open('data.pdf', 'rb')

pdfReader = PyPDF4.PdfFileReader(pdfObject)

numberPages = pdfReader.numPages
#print(pdfReader.getPage(1).extractText())

elements = []

for i in range(numberPages):
	pageObj = pdfReader.getPage(i)
	pageElements = pageObj.extractText();
	elements += pageElements.splitlines()

elementsToRemove = ["SECTION ", "TEXAS A&M UNIVERSITY", "GRADE DISTRIBUTION REPORT FOR SPRING 2020", 
"COLLEGE:", "DEPARTMENT:", "ENGINEERING", "Undergraduate", "Graduate", "TOTAL ", "-----", "-------", 
"------------", "-------------------", "ENG TECH & IND DISTRIBUTION", "A", "B", "C", "D", "F", "A - F", "GPA", "I", "S", "U", "Q", "X", "TOTAL", "INSTRUCTOR",
"MATERIALS SCIENCE & ENGR", "CIVIL & ENVIRONMENTAL ENGR", ""]
for i in range(len(elements) - 1, -1, -1):
	word = elements[i];
	if word in elementsToRemove:
		elements.pop(i)
	elif ("ENGINEERING" in word) or (" ENG" in word) or ("%" in word):
		elements.pop(i)

rows = []

'''
iterate through the list
information regarding how the data is formatted now : 
basically, first we will assume that the first string is indeed a section
if it is, then we will take in the next 14 elements and push them into a list
otherwise, if it is = to "COURSE TOTAL"
then we should read in the next 13 elements
'''
i = 0
while i < len(elements):
	word = elements[i]
	currList = [word]
	if "COURSE TOTAL:" in word or "DEPARTMENT TOTAL:" in word or "COLLEGE TOTAL:" in word:
		for j in range(13):
			i += 1
			currList += [elements[i]]
	else:
		for j in range(14):
			i += 1
			currList += [elements[i]]
	i += 1
	rows += [currList];

# now need to be able to compute some information from the courses
# so from each course, we compute this information:
# combine all of the sections that a prof taught for one course together into one (so sum up the As, Bs, Cs, Ds, and Fs)
# use that information to compute GPA
# then, after I find "Course total", then I should find the GPA from that, and then compare it against the gpa of the courses for each prof

# now delete the rows that have department total in them
for i in range(len(rows) - 1, -1, -1):
	if "DEPARTMENT TOTAL:" in rows[i][0] or "COURSE TOTAL:" in rows[i][0] or "COLLEGE " in rows[i][0]:
		rows.pop(i)

for i in range(len(rows)):
	if "COURSE TOTAL:" not in rows[i][0]:
		rows[i][0] = rows[i][0][:8].replace("-", "")
# A -> F GPA TotalStudents Instructor Course Distance, Spring 2020

courses = []

i = 0 # this is a counter 
while i < len(rows):
	entry = rows[i]
	n = len(entry)
	instructor = entry[n - 1]
	course = entry[0]
	countA = 0
	countB = 0
	countC = 0
	countD = 0
	countF = 0
	totalStudents = 0
	newEntry = []
	while i < len(rows) and n == 15 and rows[i][0] == course and instructor in rows[i][n - 1]:
		countA += int(rows[i][1])
		countB += int(rows[i][2])
		countC += int(rows[i][3])
		countD += int(rows[i][4])
		countF += int(rows[i][5])
		totalStudents += int(rows[i][6])
		i += 1

	newEntry += [round(float(countA) / totalStudents * 100.00, 2)]
	newEntry += [round(float(countB) / totalStudents * 100.00, 2)]
	newEntry += [round(float(countC) / totalStudents * 100.00, 2)]
	newEntry += [round(float(countD) / totalStudents * 100.00, 2)]
	newEntry += [round(float(countF) / totalStudents * 100.00, 2)]
	newEntry += [round((4 * countA + 3 * countB + 2 * countC + countD) / float(totalStudents), 3)]
	newEntry += [totalStudents]
	newEntry += [instructor]
	newEntry += [course]
	newEntry += ["Spring 2020"]

	newEntry += [countA]
	newEntry += [countB]
	newEntry += [countC]
	newEntry += [countD]
	newEntry += [countF]

	courses += [newEntry]

i = 0
while i < len(courses):
	start = i
	entry = courses[i]
	countA = 0
	countB = 0
	countC = 0
	countD = 0
	countF = 0
	totalStudents = 0

	course = entry[8]
	#print(course)
	while i < len(courses) and course in courses[i][8]:
		countA += int(courses[i][10])
		countB += int(courses[i][11])
		countC += int(courses[i][12])
		countD += int(courses[i][13])
		countF += int(courses[i][14])
		totalStudents += int(courses[i][6])
		i += 1

	gpa = round((4 * countA + 3 * countB + 2 * countC + countD) / float(totalStudents), 3)
	for j in range(start, i):
		for k in range(5):
			courses[j].pop(-1)
		courses[j] += [round(courses[j][5] - gpa, 3)]

out = open("names.txt", "w")
for r in courses:
	out.write(r[7] + "\n")
#print(rows)

pdfObject.close()
out.close()