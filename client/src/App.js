import "./App.css";
import Auth from "./Auth";
import Profile from "./Profile";
import ExtraInformation from "./components/ExtraInformation"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/oauth/kakao/callback" element={<Authcheck />} />
        <Route path="/" element={<KakaoLogin />} />
        <Route path="/profile" element={<Pro />} />
        <Route path="/extrainfo" element={<ExtraInformation />} />
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

function Pro() {
  return Profile()
}