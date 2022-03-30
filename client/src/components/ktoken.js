import axios from 'axios';
import React, { useState, useEffect } from 'react'
import qs from "qs";

export function ktoken() {
  

  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/extrainfo";
  const CLIENT_SECRET = "5kIEwgPacM7aV9m1Yk6BXRqdaTLe2jh1";
  
  const code = new URL(window.location.href).searchParams.get("code");
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
      },console.log(`code: ${code}`));

    // access token 가져오기
    const res = await axios.post(
     "https://kauth.kakao.com/oauth/token",
      payload
    );
      
    const token = res.data.access_token
    console.log(token)

    let body = {
      token: token,
      registrationId: "KaKao"
    }

    axios.post('/api/token', body) //토큰, 추가 정보 전송
    .then(res => {
      if(res.data.success){
        console.log(res.data)
      }
    })
    .catch(err => console.log(err))
    };
  
  return getToken()
}


export default ktoken