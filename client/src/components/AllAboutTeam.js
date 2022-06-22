import React from 'react';
import List from "./List"
import TeamInfo from './TeamInfo';
import SquadSetter from './SquadSetter'

function AllAboutTeam () {

  return(
      <div style={{  display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-evenly', paddingTop: '5%'}}>
        {<List />}
        {<SquadSetter/>}
        {<TeamInfo />}
      </div>
  )
}

export default AllAboutTeam