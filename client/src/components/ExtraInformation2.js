import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import * as Google from "./Google"

function ExtraInformation2(props) {
  const navigate = useNavigate()
  const [NickName, setNickName] = useState("")
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const onNickNameHandler = (event) => {
    setNickName(event.currentTarget.value)
  }

  const allBtnEvent =()=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    } 
  };
  
  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };
  
  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };
  
  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  useEffect(()=>{
    if(ageCheck===true && useCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(ageCheck===true && useCheck===true){ //필수동의사항 체크
      //Google.onSuccess()

      let body = {
        nickName: NickName,
        agreeMarketing: marketingCheck
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
      alert("필수 사항을 체크하여 주십시오.")
    }
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}>
        <label>닉네임</label>
        <input type="text" value={NickName} onChange={onNickNameHandler} />

        <div>
        		<input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
        		<label>전체동의</label>
        </div>

        <div>
        		<input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
        		<label>만 14세 이상입니다 <span >(필수)</span></label>
        </div>

        <div>
        		<input type="checkbox" id="check2" checked={useCheck}  onChange={useBtnEvent}/>
        		<label>이용약관 <span >(필수)</span></label>
        </div>
        
        <div>
        		<input type="checkbox" id="check3" checked={marketingCheck}  onChange={marketingBtnEvent}/>
        		<label>마케팅 동의 <span >(선택)</span></label>
        </div>

        <br />
        <button type="submit">
          Register
        </button>
      </form>
    </div>
    
  )
}

export default ExtraInformation2