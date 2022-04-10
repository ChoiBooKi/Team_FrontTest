import axios from 'axios';
import qs from "qs";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function Kakao() {
  const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
  const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
  const CLIENT_SECRET = "5kIEwgPacM7aV9m1Yk6BXRqdaTLe2jh1";
  const navigate = useNavigate()

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(`code: ${code}`)

  useEffect(async() => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
      });

    const res = await axios.post(
     "https://kauth.kakao.com/oauth/token",
      payload
    );

    const token = res.data.access_token
    console.log(token)

    axios.get('/api/login/oauth2/kakao',{
      params: {
        Authorization: token
      }
    }) //토큰 전송
    .then(res => {
      if(res.data.isUser){//기존 회원
        console.log(res.data)
        navigate('/')
      }
      else if(res.data.notUser){//신규 회원
        console.log(res.data)
        navigate('/teamleader')
      }
      else {//그 외
        alert("오류가 발생했습니다")
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  })

  return <div></div>
}


export default Kakao