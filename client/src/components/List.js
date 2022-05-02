import React, { useState }  from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './List.css'
import Modal from 'react-modal';

function List () {
  const [PlayerList, SetPlayerList] = useState(null);
  const [Modalis, SetModalis] = useState(false)
  const [Info, SetInfo] = useState(null)
  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
    const res = await axios.get("/api/readUser")
    const sort = res.data.sort(function(a, b){//DB에서 온 리스트 선발선수 맨위로 정렬
      let x = a.already
      if(x === true){
        return -1
      }
      return 0
    })
    SetPlayerList(sort)
  }, [])
  
  const ModalClose = () => {
    SetModalis(false)
  }
  const ModalOpen = (e) => {
    SetModalis(true)
    console.log(e.currentTarget.id)
    //axios.get으로 해당 회원 정보 넘겨받고 받은 내용 SetInfo에 저장하고 Modal에서 띄워주기
    //대답오기 전까지는 로딩 원 가능하면 하기
  }
  return (
    <div>
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}> 
        <button 
          value="true"
          onClick={(e)=> {ModalClose(e)}}>
          네
        </button>
        <button 
          value="false"
          onClick={(e)=> {ModalClose(e)}}>
          아니오
        </button>
      </Modal>
      <div className='list'>
        <h2>선수 리스트</h2>
        <ul>
          {PlayerList && PlayerList.map((player) => {
            if(player.already === true){
              return (
                <li id="hi" className = "selected" key={player._id}>
                  선발
                  {player.name}
                  {player.select}
                  {player.back}
                  <button id={player._id} onClick={(e) => ModalOpen(e)}>i</button>
                </li>
              )
            } 
            else if(player.already === false){
              return (
                <li className = "candidate" key={player._id}>
                  후보
                  {player.name}
                  {player.like}
                  {player.back}
                  <button id={player._id} onClick={(e) => ModalOpen(e)}>i</button>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default List