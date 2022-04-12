import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function TeamExtraInformation(props) {
  const navigate = useNavigate()
  const formdata = new FormData()
  const selectList = [" ", "서울", "경기", "전라", "경상"]
  const [TeamName, setTeamName] = useState("")
  const [Images, setImages] = useState("")
  const [Selected, setSelected] = useState("")
  const [Content, setContent] = useState("")

  let Search = 0

  const SelectHandler = (e) => { setSelected(e.target.value) }

  const onTeamNameHandler = (e) => { setTeamName(e.currentTarget.value) }

  const onContentChange = (e) => { setContent(e.currentTarget.value) };

  const onLoadImage = (e) => {
    const img = e.target.files
    setImages(img[0])
  }

  const onSubmitHandler = (e) => {  // 다음 버튼
    e.preventDefault()  
    if(Search && Selected){ //필수동의사항 체크
      let body = {
        NickName: TeamName,
        Region: Selected,
        Introduce: Content
      }
      formdata.append("image", Images)// 이미지 폼 데이터에 담기
      formdata.append("body", JSON.stringify(body))// 바디 폼 데이터에 담기
      for (let value of formdata.values()) {
        console.log(value);
      }
      axios.post('/api/extraInfo', formdata) //추가 정보 전송
      .then(res => {
        if(res.data.success){
          navigate('/extrainfo')
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
    } else if(Search === 0){
      alert("중복 조회를 해주십시오.")
    } else {
      alert("필수 사항을 작성하여 주십시오.")
    }
  }

  const onCheckHandler = (event) => { // 조회 버튼
    event.preventDefault()
    if (TeamName) {
      Search = 1 // 중복 조회 확인
      axios.get('/api/search', {
          params: {
            Teamname: TeamName
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
        <label>팀명</label>
        <input type="text" value={TeamName} onChange={onTeamNameHandler} />
        <button onClick={onCheckHandler}>중복확인</button>
        <label>팀 로고</label>
        <input type="file" accept='image/*' onChange={onLoadImage}/>
        <label>팀 소개 글</label>
        <textarea rows="6" onChange={onContentChange} value={Content} placeholder='팀 소개를 작성하여 주십시오.'></textarea>
        
        <select onChange={SelectHandler} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <button onClick={onSubmitHandler}>다음</button>
      </form>
    </div>
    
  )
}

export default TeamExtraInformation