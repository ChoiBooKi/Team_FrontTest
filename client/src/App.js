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
              {/* 팀 가입이 되어 있으면 팀관리로 가고 아니면 팀목록, 팀생성 버튼이 있는 곳으로 가야된다 */}
              {/* Route를 어떻게 분기를 해야할까? */}
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