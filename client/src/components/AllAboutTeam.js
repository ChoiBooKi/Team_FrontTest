import React from 'react';
import List from "./List"
import TeamInfo from './TeamInfo';
import SquadSetter from './SquadSetter'

function AllAboutTeam () {

  return(
      <div style={{  display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', paddingTop: '5%'}}>
        {/* 얘네 세개 요소 최소크기 유저 모니터 크기 window로 받아서 지정해야된다 */}
        {<List />}
        {<SquadSetter/>}
        {<TeamInfo />}
      </div>
  )
}

export default AllAboutTeam