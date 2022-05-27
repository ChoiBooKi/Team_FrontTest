import "./App.css";
import React from 'react'
import ExtraInformation from "./components/ExtraInformation"
import TeamExtraInformation from "./components/TeamExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Kakao from "./components/Kakao";
import TeamLeader from "./components/TeamLeader";
import Formation from "./components/Formation"
import TeamManage from "./components/TeamManage";
import Search from "./components/Search";
import ResponsiveAppBar from "./components/Appbar"

function App() {
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
              <Route path="/move" element={<Formation />} />
              <Route path="/teammanage" element={<TeamManage />} />
              <Route path="/search" element={<Search />} />
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