import React from 'react'
import Google from "./Google";
import ResponsiveAppBar from "./Appbar"
import './MainPage.css'
import { Button } from '@mui/material';

function MainPage() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div className='main'>
      <ResponsiveAppBar/>
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      <Google/>
      <br/>
      <a href="http://localhost:3000/teammanage" className='ab'>팀관리</a>
      <div class="wrapper" >
        <div class="small">Sent For All Sport Teams</div>
        <div style={{display:"flex"}}>
          <div class="big">S</div>
          <div class="normal">ports&nbsp;</div>
          <div class="big">ENT</div>
          <div class="normal">ertainment </div>
        </div>
        <Button class="btn">Start Now</Button>
        <Button class="smaller">Learn more</Button>
      </div>
    </div>
  )
}

export default MainPage