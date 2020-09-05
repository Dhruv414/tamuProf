import React from 'react'
import "./pages.css"





function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="header-container">
                <img style={{filter: "brightness(50%)", height:"750px", width: "100%", objectFit: "cover", objectPosition: "50% 50%"}} src="https://today.tamu.edu/wp-content/uploads/2019/10/20190806_TAMU_Arerial_brs0070-Edit-2400.jpg" />
                <div className="header-text">
                    <h1 className="header-h1">About Us</h1>
                    <p className="header-p"> blah blah blah</p>
                </div>
            </div>
            <div className="content-wrapper">
                Slap some content here
            </div>
        </div>
    )
}

export default Home
