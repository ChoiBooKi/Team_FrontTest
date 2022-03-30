import React from 'react'
import Google from "./Google";

function MainPage() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/extrainfo";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      <Google/>
    </div>
  )
}

export default MainPage