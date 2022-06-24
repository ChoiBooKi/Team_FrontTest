import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './List.css'
import Modal from 'react-modal';
import Grid from '@mui/material/Grid';


function List() {
  const [PlayerList, SetPlayerList] = useState(null);
  const [Modalis, SetModalis] = useState(false)
  const [Content, SetContent] = useState()
  useEffect(async () => {//페이지 들어가자마자 DB에서 포지션, 선수 정보 받아오고 각 원에 이름 넣어주기
    const res = await axios.get("/api/readUser")//선수정보
    //유저정보도 받아와야됨
    const sort = res.data.sort(function (a, b) {//DB에서 온 리스트 선발선수 맨위로 정렬
      let x = a.already
      if (x === true) {
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
    axios.get('/api/readInfo', { // email 받아와서 백으로 보내고 백에서 email로 구분해서 정보 보내줌
      params: {
        email: e.currentTarget.id
      }
    }).then(res => {
      console.log(res.data)
      SetContent(res.data[0])
    })
    //팀정보에서는 그냥 등번호 이름 포지션만 띄우고 선수관리에서 위의 로직을 사용하는것으로 변경하였다 우선 여기에 두고 나중에 가져다쓰자
    //***************************useEffect로 바로 받아오는게 아니라 i버튼 클릭할 때 id값으로 get 요청해서 받아온 값 띄우는걸로 변경, 쿼리에는 id로 넘기기
    SetModalis(true)
  }
  return (
    <div className='list'>
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}>
        {Content && Content.name}
        {Content && Content.gender}
        {Content && Content.email}
        {Content && Content.nickname}
        {Content && Content.region}
        {Content && Content.like}
        {Content && Content.player}
        {Content && Content.info}
      </Modal>
      <div>
        {/* <h2>선수 리스트</h2> */}
        <Grid container>
          <Grid item xs={12}>
            {/* <ul> */}
            {/* ul li 둘다 제거 */}
            <div>
              <Grid container justifyContent="space-between"
                alignItems="center"
                sx={{ border: 1, height: '5vh' }}>
                <Grid item xs={4} sx={{
                  fontWeight: 'bold',
                  fontSize: 13, fontStyle: 'italic'
                }} >
                  등번호
                </Grid>
                <Grid item xs={4} sx={{
                  fontWeight: 'bold',
                  fontSize: 13, fontStyle: 'italic'
                }}>
                  포지션
                </Grid>
                <Grid item xs={4} sx={{
                  fontWeight: 'bold',
                  fontSize: 13, fontStyle: 'italic'
                }}>
                  선수명
                </Grid>
              </Grid>
              {PlayerList && PlayerList.map((player) => {
                if (player.already === true) {
                  return (
                    // <li className="selected" key={player._id}>
                    <Grid container justifyContent="space-between" key={player._id}
                      alignItems="center"
                      sx={{ border: 1, height: '5vh' }}>
                      <Grid item xs={4} sx={{
                        color: 'blue', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }} >
                        선발
                      </Grid>
                      <Grid item xs={4} sx={{
                        color: 'blue', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }}>
                        {player.name}
                        {player.select}
                      </Grid>
                      <Grid item xs={4} sx={{
                        color: 'blue', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }}>
                        {player.back}
                      </Grid>
                    </Grid>
                    // </li>
                  )
                }
                else if (player.already === false) {
                  return (
                    // <li className="candidate" key={player._id}>
                    <Grid container direction="row" justifyContent="space-between" key={player._id}
                      alignItems="center"
                      sx={{ border: 1, height: '5vh' }}>
                      <Grid item xs={4} sx={{
                        color: 'red', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }}>
                        후보
                      </Grid>
                      <Grid item xs={4} sx={{
                        color: 'red', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }}>
                        {player.name}
                        {player.like}
                      </Grid>
                      <Grid item xs={4} sx={{
                        color: 'red', fontWeight: 'bold',
                        fontSize: 13, fontStyle: 'italic'
                      }}>
                        {player.back}
                      </Grid>
                    </Grid>
                    // </li>
                  )
                }
              })}
            </div>
            {/* </ul> */}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default List