import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as config from '../config'

const clientId = config.Google_Login_CLIENT_ID;

export function Google({ onGoogleLogin }){
  const navigate = useNavigate()
  const onSuccess = async(response) => {

    const token = response.tokenObj.access_token
    console.log(token)

  axios.get('/api/login/oauth2/google', {
    params: {
      Authorization: token
    }
  }) //토큰, 추가 정보 전송
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
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    <GoogleLogin
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      button="Google"
    />
  )
}

export default Google