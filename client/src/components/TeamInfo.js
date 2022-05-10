import React, { useState, useRef }  from 'react';
import Avatar from '@mui/material/Avatar';
//import './TeamInfo.css'

function TeamInfo () {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
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
    </div>
  )
}
export default TeamInfo