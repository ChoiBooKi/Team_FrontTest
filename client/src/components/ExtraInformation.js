import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function TeamExtraInformation(props) {
  const navigate = useNavigate()
  const regionList = [" ", "서울", "경기", "전라", "경상"]//디비한테 '도' 명만 쿼리로 보내주면 상세지역은 get으로 받아와서 처리
  const positionList = ['---공격수(FW)---', "ST", "LW", "RW", "CF", "SS",'---미드필더(MF)---', "CAM", "CM", 'LM', 'RM', 'CDM','---수비수(DF)---', 'CB', 'LB', 'RB', 'SW', 'LWB', 'RWB','---골키퍼(GK)---', 'GK']
  const proList = [" ", "네", "아니오"]

  const [Info, SetInfo] = useState({
    userName: '',
    nickName: '',
    email: '',
    password: '',
    activityArea: '',
    position: '',
    gender: '',
    birthDate: '',
    isExpert: ''
  })

  let Search = 0

  // const onRegionHandler = (e) => { setRegion(e.target.value) }
  // const onPositionHandler = (e) => { setPosition(e.target.value) }
  // const onProHandler = (e) => { setPro(e.target.value) }
  // const onNickNameHandler = (e) => { setNickName(e.currentTarget.value) }

  const { userName, nickName, email, password, activityArea, position, gender, birthDate, isExpert } = Info
  const onInfoHandler = (e) => {
    const { id, value } = e.target
    SetInfo({
      ...Info,
      [id] : value
    })
  }

  const onSubmitHandler = (e) => {  // 다음 버튼
    e.preventDefault()  
    if(Search && activityArea && isExpert){ //필수동의사항 체크
      axios.post('/api/user/extraInfo', Info) //추가 정보 전송
      .then(res => {
        if(res.data.success){
          navigate('/')
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
    } else if(Search === 0 && activityArea === ""){
      alert("필수 사항을 작성하여 주십시오.")
    } else {
      alert("닉네임 중복 확인을 해주십시오.")
    }
  }
  const onCheckHandler = (event) => { // 조회 버튼
    event.preventDefault()
    if (nickName) {
      Search = 1 // 중복 조회 확인
      axios.get('/api/searchNickname', {
          params: {
            nickName: nickName
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
  //각 핸들러들 만들고 박스 안에 넣어야됨
  //중복확인 로직, 생년월일 이메일 등 구글링해서 나은 폼 있으면 적용
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh', color:'black', backgroundColor: 'white',
      marginTop: '1%', borderRadius: '15px', height: '75vh',
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>이름(필수)</label>
        <input id= 'userName' value={userName} onChange={onInfoHandler} />

        <label>닉네임(필수)</label>
        <input type="text" id='nickName' value={nickName} onChange={onInfoHandler} />
        <button onClick={onCheckHandler}>중복확인</button>

        <label>이메일(필수)</label>
        <input type="text" id='email' value={email} onChange={onInfoHandler} />
        <button onClick={onCheckHandler}>중복확인</button>

        <label>비밀번호(필수)</label>
        <input type="text" id='password' value={password} onChange={onInfoHandler} />

        <label>성별(필수)</label>
        <input type="text" id='gender' value={gender} onChange={onInfoHandler} />

        <label>생년월일(필수)</label>
        <input type="text" id='birthDate' value={birthDate} onChange={onInfoHandler} />

        <label>활동 지역(필수)</label>
        <select onChange={onInfoHandler} id='activityArea' value={activityArea}>
          {regionList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>

        <label>선호 포지션</label>
        <select onChange={onInfoHandler} id='position' value={position}>
          {positionList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        
        <label>선출 유무(필수)</label>
        <select onChange={onInfoHandler} id='isExpert' value={isExpert}>
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