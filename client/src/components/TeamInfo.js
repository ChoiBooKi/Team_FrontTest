import React, { useState, useRef }  from 'react';
import Avatar from '@mui/material/Avatar';
import "./TeamInfo.css"

function TeamInfo () {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")//기본이미지
  const [TeamInfo, SetTeamInfo] = useState('안녕안녕')
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
    <div className='body' >
      <h1>팀명</h1>
      <Avatar 
        className='avatar'
        alt="팀이미지" 
        src={Image} 
        sx={{ width: 200, height: 200 }} 
        onClick={()=>{fileInput.current.click()}}/>
      <input 
        className='input'
 	      type='file' 
    	  style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
      <div className='teaminfo'>
        <h2 style={{marginRight:"50%", marginTop:"10%"}}>팀 소개</h2>
        <textarea 
          maxlength="200" 
          style={{resize: "none", width: "400px", marginLeft: "100px", border: "2px solid black",   borderRadius:"10px"}}
          rows="6">
          {TeamInfo}
        </textarea>
        <div style={{display:"flex"}}>
          {/* 각각 가로로 보이게 해야됨 지금너무 야매스타일 */}
          <h2 style={{margin:"5%", marginLeft:"17%"}}>팀장</h2>
          <div style={{marginTop:"5.5%"}}>{TeamInfo}</div>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>팀 등록일</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>총 선수 수</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>연령대</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo}</p>
        </div>
        <div style={{display:"flex"}}>
          <h2 style={{margin:"5%", marginLeft:"17%"}}>활동지역</h2>
          <p style={{marginTop:"5.5%"}}>{TeamInfo}</p>
        </div> 
      </div>
    </div>
  )
}
export default TeamInfo