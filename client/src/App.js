import "./App.css";
import React from 'react';
import ExtraInformation from "./components/ExtraInformation"
import TeamExtraInformation from "./components/TeamExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Kakao from "./components/Kakao";
import TeamLeader from "./components/TeamLeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/extrainfo" element={<ExtraInformation />} />
          <Route path="/login/oauth/kakao" element={<Kakao />} />
          <Route path="/teamleader" element={<TeamLeader/>} />
          <Route path="/teamextrainfo" element={<TeamExtraInformation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;