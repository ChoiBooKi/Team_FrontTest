import React, { useState, useRef }  from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';

const regionList = [" ", "서울", "경기", "전라", "경상"]
let checkTeamname = 0

const MakeTeam = () => {
  const [TeamInfo, SetTeamInfo] = useState({
    teamName: '',
    teamIntro: '',
    teamActivityArea: ''
  })
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")//기본이미지
  const {teamName, teamIntro, teamActivityArea} = TeamInfo
  const fileInput = useRef(null)
  const formdata = new FormData()

  const onInfoHandler = (e) => {
    const { id, value } = e.target
    console.log(id)
    SetTeamInfo({
      ...TeamInfo,
      [id] : value
    })
  }

  const onImageHandler = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0].name)
    }else{ //업로드 취소할 시
      setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
      return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const NickChecker = (e) => {//키보드 누를때마다 물어봄
    e.preventDefault()  //페이지 리로드 방지
    if (teamName) {
      axios.get('/api/hello', {
          params: {
            teamName: teamName
          }
      }).then(res => {
        if (res.data.success) { //중복 X
          checkTeamname = 1 // 중복 조회 확인
        } else if (res.data.notUser) { //중복 O
          // alert("사용 불가능한 팀 명 입니다.")
          checkTeamname = 0
        } else { //그 외
          alert("오류가 발생했습니다") //에러
        }
      })
      .catch(err => console.log(err))
    }
  }

  const onSubmitHandler = (e) => {  // 다음 버튼
    e.preventDefault()  //페이지 리로드 방지
    console.log(TeamInfo)
  }
  return(
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh', color:'black', backgroundColor: 'white',
      marginTop: '1%', borderRadius: '15px', height: '75vh',
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>팀명</label>
        <input type="text" id='teamName' onKeyUp={NickChecker} value={teamName} onChange={onInfoHandler} />
        {/* <button id='nickName' onClick={onCheckHandler}>중복확인</button> */}
        {teamName !== '' ? <div>{checkTeamname === 1 ? '사용 가능한 닉네임 입니다.' : '사용 불가능한 닉네임 입니다.'}</div> : null }

        <label>팀 소개</label>
        <textarea 
          maxLength="200" 
          id={'teamIntro'}
          value={teamIntro && teamIntro} //벨류라서 변경이 안됨
          onChange={onInfoHandler}
          style={{resize: "none", width: "350px", border: "2px solid black",   borderRadius:"10px", width: "26vh"}}
          rows="4">
        </textarea>

        <label>활동 지역</label>
        <select onChange={onInfoHandler} id='teamActivityArea' value={teamActivityArea}>
          {regionList.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        
        <label>팀 로고</label>
        <Avatar 
        className='avatar'
        alt="팀이미지" 
        src={Image} 
        sx={{ width: '15vh', height: '15vh', marginTop:'-1.5vh', marginBottom:'-1.5vh' }} 
        onClick={()=>{fileInput.current.click()}}/>
        <input 
          className='input'
          type='file' 
          style={{display:'none'}}
          accept='image/jpg,impge/png,image/jpeg' 
          name='profile_img'
          onChange={onImageHandler}
          ref={fileInput}/>

        <button onClick={onSubmitHandler}>회원 가입</button>
      </form>
    </div>
  )
}

export default MakeTeam