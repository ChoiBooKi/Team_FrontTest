import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

let checkEmail = 0, checkNickname = 0

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

  const { userName, nickName, email, password, activityArea, position, gender, birthDate, isExpert } = Info

  const onInfoHandler = (e) => {
    const { id, value } = e.target
    SetInfo({
      ...Info,
      [id] : value
    })
  }

  const EmailChecker = (e) => { // 조회 버튼
    e.preventDefault()  //페이지 리로드 방지
      if (email) {
        axios.get('/api/hello', {
            params: {
              email: email
            }
        }).then(res => {
          if (res.data.success) { //인증완료
            checkEmail = 1 // 이메일 중복 조회 및 인증 완료 플래그
            alert("인증이 완료되었습니다.")
            //Search = 1
          } else if (res.data.notUser) { //인증실패
            alert("사용 불가능한 팀 명 입니다.")
          } else { //그 외
            alert("오류가 발생했습니다") //이메일 중복
          }
        })
        .catch(err => console.log(err))
      } else alert("이메일을 입력해 주십시오.")
  }
  
  const NickChecker = (e) => {//키보드 누를때마다 물어봄
    e.preventDefault()  //페이지 리로드 방지
    if(e.target.id === 'nickName'){
      if (nickName) {
        axios.get('/api/hello', {
            params: {
              nickName: nickName
            }
        }).then(res => {
          if (res.data.success) { //중복 X
            checkNickname = 1 // 중복 조회 확인
          } else if (res.data.notUser) { //중복 O
            // alert("사용 불가능한 팀 명 입니다.")
            checkNickname = 0
          } else { //그 외
            alert("오류가 발생했습니다") //에러
          }
        })
        .catch(err => console.log(err))
      }
    }
  }

  const onSubmitHandler = (e) => {  // 다음 버튼
    e.preventDefault()  //페이지 리로드 방지
    if(checkEmail && checkNickname){ //필수동의사항 체크
      let body = {
        userName: userName,
        nickName: nickName,
        email: email,
        password: password,
        activityArea: activityArea,
        position: position,
        gender: gender,
        birthDate: birthDate,
        isExpert: isExpert
      }
      axios.post('/api/extraInfo', body) //추가 정보 전송
      .then(res => {
        if(res.data.success){
          // navigate('/')
          console.log(res)
        }
      })
      .catch(err => console.log(err))
    } else if(checkEmail === 0 && checkNickname === 1){
      alert("이메일 인증을 해주십시오.")
    } else if(checkEmail === 1 && checkNickname === 0){
      alert("닉네임 중복확인을 해주십시오.")
    } else {
      alert("칸을 채워주십시오")
    }
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh', color:'black', backgroundColor: 'white',
      marginTop: '1%', borderRadius: '15px', height: '75vh',
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>이름</label>
        <input id= 'userName' value={userName} onChange={onInfoHandler} />

        <label>닉네임</label>
        <input type="text" id='nickName' onKeyUp={NickChecker} value={nickName} onChange={onInfoHandler} />
        {/* <button id='nickName' onClick={onCheckHandler}>중복확인</button> */}
        {nickName !== '' ? <div>{checkNickname === 1 ? '사용 가능한 닉네임 입니다.' : '사용 불가능한 닉네임 입니다.'}</div> : null }


        <label>이메일</label>
        <input type="text" id='email' value={email} onChange={onInfoHandler} />
        <button id='email' onClick={EmailChecker}>이메일 인증</button>

        <label>비밀번호</label>
        <input type="text" id='password' value={password} onChange={onInfoHandler} />

        <label>성별</label>
        <input type="text" id='gender' value={gender} onChange={onInfoHandler} />

        <label>생년월일</label>
        <input type="text" id='birthDate' value={birthDate} onChange={onInfoHandler} />

        <label>활동 지역</label>
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
        
        <label>선출 유무</label>
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