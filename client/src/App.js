import "./App.css";
import Auth from "./Auth";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/oauth/kakao/callback" element={<Authcheck />} />
        <Route path="/" element={<KakaoLogin />} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;

function KakaoLogin() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return <a href={KAKAO_AUTH_URL}>Kakao Login</a>;
}

function Authcheck() {
  return Auth()
}