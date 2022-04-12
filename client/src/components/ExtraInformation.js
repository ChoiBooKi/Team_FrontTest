import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function ExtraInformation(props) {
  const navigate = useNavigate()
  const [TeamName, setTeamName] = useState("")
  //const [Region, setRegion] = useState("")

  const onTeamNameHandler = (event) => {
    setTeamName(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(TeamName){ //필수동의사항 체크
      //Google.onSuccess()
      let body = {
        nickName: TeamName
      }
      axios.post('/api/extraInfo', body) //토큰, 추가 정보 전송
      .then(res => {
        if(res.data.success){
          navigate('/')
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
    } else {
      alert("필수 사항을 작성하여 주십시오.")
    }
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>닉네임</label>
        <input type="text" value={TeamName} onChange={onTeamNameHandler} />
        <button>중복확인</button>
        <label>팀 로고</label>
        <input type="file"/>
        <label>팀 소개 글</label>
        <textarea rows="6" placeholder='팀 소개를 작성하여 주십시오.'></textarea>
        
        <select name="지역" multiple>
          <option>서울</option>
          <option>경기도</option>
          <option>전라도</option>
          <option>경상도</option>
          <option>제주도</option>
        </select>
        <br />
        <button type="submit" onClick={onSubmitHandler}>
          Register
        </button>
      </form>
    </div>
    
  )
}

export default ExtraInformation