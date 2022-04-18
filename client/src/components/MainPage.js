import React, {useEffect, useState} from 'react'
import Google from "./Google";
import axios from 'axios';
import Formation from './Formation';

function MainPage() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  // const [db, setdb] = useState()
  // useEffect(async () => {
  //   const res = await axios.get("/api/readUser")
  //   setdb(res.data)
  //   console.log(res.data)
  // }, [])

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      <Google/>
      <a href="http://localhost:3000/move" >move</a>
    </div>
  )
}

export default MainPage