import "./App.css";
import React, { useEffect } from 'react'
import ExtraInformation from "./components/ExtraInformation"
import TeamExtraInformation from "./components/TeamExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Kakao from "./components/Kakao";
import TeamLeader from "./components/TeamLeader";
import TeamManage from "./components/TeamManage";
import ResponsiveAppBar from "./components/Appbar"
import MakeTeam from "./components/MakeTeam";

function App() {
  const minwidth = window.screen.height * 1.35 ;
  useEffect(() => {
    let myElement = document.querySelector(".Back");
    myElement.style.minWidth = `${minwidth}px`
  },[])
 
  return (
    <div className="Back">
      <Router>
        <header>
          <ResponsiveAppBar/>
        </header>
        {/* <body> */}
          <div className="App">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/extrainfo" element={<ExtraInformation />} />
              <Route path="/login/oauth/kakao" element={<Kakao />} />
              <Route path="/teamleader" element={<TeamLeader/>} />
              <Route path="/teamextrainfo" element={<TeamExtraInformation />} />
              <Route path="/make" element={<MakeTeam />} />
              <Route path="/teammanage" element={<TeamManage />} />
            </Routes>
          </div>
        {/* </body> */}
        {/* <footer>
          생길예정
        </footer> */}
      </Router>
    </div>
  );
}

export default App;