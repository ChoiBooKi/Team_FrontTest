import "./App.css";
import React from 'react';
import ExtraInformation from "./components/ExtraInformation"
import ExtraInformation2 from "./components/ExtraInformation2"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";


 function App() {
   return (
     <Router>
     <div className="App">
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/extrainfo" element={<ExtraInformation />} />
         <Route path="/extrainfo2" element={<ExtraInformation2 />} />
       </Routes>
     </div>
     </Router>
   );
 }
 export default App;