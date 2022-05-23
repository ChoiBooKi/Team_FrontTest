import "./App.css";
import React, {useEffect} from 'react'
import ExtraInformation from "./components/ExtraInformation"
import TeamExtraInformation from "./components/TeamExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Kakao from "./components/Kakao";
import TeamLeader from "./components/TeamLeader";
import Formation from "./components/Formation"
import axios from 'axios';
import { useState } from "react";
import TeamManage from "./components/TeamManage";
import Search from "./components/Search";
import ResponsiveAppBar from "./components/Appbar"

function App() {
  return (
    <div>
      <Router>
        {/* <ResponsiveAppBar/> */}
        <div className="App" style={{backgroundImage:"url(./img/배경.png)"}}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/extrainfo" element={<ExtraInformation />} />
            <Route path="/login/oauth/kakao" element={<Kakao />} />
            <Route path="/teamleader" element={<TeamLeader/>} />
            <Route path="/teamextrainfo" element={<TeamExtraInformation />} />
            <Route path="/move" element={<Formation />} />
            <Route path="/teammanage" element={<TeamManage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;