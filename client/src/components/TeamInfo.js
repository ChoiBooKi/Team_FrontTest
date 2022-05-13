import React, { useState, useRef }  from 'react';
import Avatar from '@mui/material/Avatar';
//import './TeamInfo.css'

function TeamInfo () {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const [TeamInfo, SetTeamInfo] = useState('가나다라마바사아자차카타파하가나다라마바사아자차카타파하')
  const fileInput = useRef(null)

  const onChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])
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

  //팀소개 글자수제한, 팀장, 팀 등록일, 총 선수 수, 연령대, 활동 지역
  //가로 길이 안늘어나는데 왜그런지 모르겠음
  return(
    <div className='body'>
      <h1>팀명</h1>
      <Avatar 
        alt="팀이미지" 
        src={Image} 
        sx={{ width: 200, height: 200 }} 
        onClick={()=>{fileInput.current.click()}}/>
      <input 
 	      type='file' 
    	  style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
      <div className='teaminfo'>
        <h2>팀 소개글</h2>
        <textarea>
          {TeamInfo}
        </textarea>
      </div>
      <div className='teaminfo'>
        <h2>팀장</h2>
        <p>{TeamInfo}</p>
        <h2>팀 등록일</h2>
        <p>{TeamInfo}</p>
        <h2>총 선수 수</h2>
        <p>{TeamInfo}</p>
        <h2>연령대</h2>
        <p>{TeamInfo}</p>
        <h2>활동지역</h2>
        <p>{TeamInfo}</p>
      </div>
      <div style={{backgroundColor:'red'}}>
        안녕
      </div>
    </div>
  )
}
export default TeamInfo