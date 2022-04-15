import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function TeamExtraInformation(props) {
  const navigate = useNavigate()
  const regionList = [" ", "서울", "경기", "전라", "경상"]
  const positionList = ["  ", "공격수", "미드필더", "수비수", "공격수"]
  const proList = [" ", "네", "아니오"]
  const [NickName, setNickName] = useState("")
  const [Region, setRegion] = useState("")
  const [Position, setPosition] = useState("")
  const [Pro, setPro] = useState("")

  let Search = 0

  const onRegionHandler = (e) => { setRegion(e.target.value) }

  const onPositionHandler = (e) => { setPosition(e.target.value) }

  const onProHandler = (e) => { setPro(e.target.value) }

  const onNickNameHandler = (e) => { setNickName(e.currentTarget.value) }

  const onSubmitHandler = (e) => {  // 다음 버튼
    e.preventDefault()  
    if(Search && Region && Pro){ //필수동의사항 체크
      let body = {
        NickName: NickName,
        Region: Region,
        Position: Position
        //isLeader: Leader
      }
      axios.post('/api/user/extraInfo', body) //추가 정보 전송
      .then(res => {
        if(res.data.success){
          navigate('/')
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
    } else if(Search === 0 && Region === ""){
      alert("필수 사항을 작성하여 주십시오.")
    } else {
      alert("닉네임 중복 확인을 해주십시오.")
    }
  }

  const onCheckHandler = (event) => { // 조회 버튼
    event.preventDefault()
    if (NickName) {
      Search = 1 // 중복 조회 확인
      axios.get('/api/searchNickname', {
          params: {
            Nickname: NickName
          }
      }).then(res => {
        if (res.data.isUser) { //중복 X
          alert("사용 가능한 팀 명 입니다.")
          //Search = 1
        } else if (res.data.notUser) { //중복 O
          alert("사용 불가능한 팀 명 입니다.")
        } else { //그 외
          alert("오류가 발생했습니다") //에러
        }
      })
      .catch(err => console.log(err))
    } else alert("팀 명을 입력해 주십시오.")
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>닉네임(필수)</label>
        <input type="text" value={NickName} onChange={onNickNameHandler} />

        <button onClick={onCheckHandler}>중복확인</button>

        <label>활동 지역(필수)</label>
        <select onChange={onRegionHandler} value={Region}>
          {regionList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>

        <label>선호 포지션</label>
        <select onChange={onPositionHandler} value={Position}>
          {positionList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        
        <label>선출 유무(필수)</label>
        <select onChange={onProHandler} value={Pro}>
          {proList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>

        <button onClick={onSubmitHandler}>회원 가입</button>
      </form>
    </div>
    
  )
}

export default TeamExtraInformation