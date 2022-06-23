import React from 'react'
import Google from "./Google";
import './MainPage.css'
import { Button } from '@mui/material';

function MainPage() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className='main'>
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      <Google/>
      <br/>
      <a href="http://localhost:3000/extrainfo" className='ab'>회원정보</a>
      <div className="wrapper" >
        <div className="small">Sent For All Sport Teams</div>
        <div style={{display:"flex"}}>
          <div className="big">S</div>
          <div className="normal">ports&nbsp;</div>
          <div className="big">ENT</div>
          <div className="normal">ertainment </div>
        </div>
        <Button id="btn">Start Now</Button>
        <Button id="smaller">Learn more</Button>
      </div>
    </div>
  )
}

export default MainPage