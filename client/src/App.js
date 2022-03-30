import "./App.css";
import React from 'react';
import ExtraInformation from "./components/ExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Extra2 from "./components/Extra2";
import Google from "./components/Google";
import MainPage from "./components/MainPage";


 function App() {
   return (
     <Router>
     <div className="App">
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/extrainfo" element={<ExtraInformation />} />
         <Route path="/google_extrainfo" element={<Extra2 />} />
         <Route path="/google" element={<Google />} />
       </Routes>
     </div>
     </Router>
   );
 }
 export default App;

 function KakaoLogin() {
   const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
   const REDIRECT_URI = "http://localhost:3000/kakao_extrainfo";
   const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
   return <a href={KAKAO_AUTH_URL}>Kakao Login</a>;
 }
