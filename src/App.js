import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Home from './pages/home';
import TopNav from './components/topNav';
import Course from './pages/course';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";





function App() {
  var path = window.location.pathname;
  const history = useHistory();
  const [search,setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  const handleNav = (e) => {
    console.log("click ", e);
    history.push("/" + e.key);
  };
 
  const [scrollerVisible, setVisible] = useState(false);

  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", outline: "none"}}
        onMouseOver={() => { setVisible(true) }}
        onMouseOut={() => setVisible(false)}
      >
        <TopNav handleNav={handleNav} handleChange={handleChange} state={path} />
        <div className="switcher" style={{height:"100%" , overflow: `${scrollerVisible ? 'auto' : 'hidden'}`}}>
          <Switch >
            <Route exact path="/home" component={(Home)}></Route>
            <Route exact path="/course" component={(Course)}></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
