import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllAboutTeam from './AllAboutTeam'

const TeamManage = () => {
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, index} = props;
    return (
      <div hidden = {value !== index} style={{width: '100%'}}>
        {<div>{children}</div >}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box" 
      style={{  
        backgroundColor: 'white',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '1%',
        borderRadius: '15px',
        height: '75vh',
        minWidth: '1800px'
      }}>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'parent', display: 'flex', height: '100%' }}
      //왼쪽 사이드 앱바 설정
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 2, borderColor: 'divider', minWidth: '20vh'}}
        >
          <Tab label="팀 정보" sx={{height: '6vh'}}/>
          <Tab label="선수 관리" sx={{height: '6vh'}}/>
          <Tab label="팀 일정" sx={{height: '6vh'}}/>
          <Tab label="팀 기록" sx={{height: '6vh'}}/>
          <Tab label="사진" sx={{height: '6vh'}}/>
          <Tab label="게시판" sx={{height: '6vh'}}/>
        </Tabs>

        <TabPanel value={value} index={0} className='Test'>
          {<AllAboutTeam />}
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>

    </div>
  );
}

// function TeamManage() {

//   return (
//     <div className='TeamManage'>
//       <div className="box">
//         <Grid container spacing={2}>
//           <Grid item xs={4}>
//             {<TeamInfo />}
//           </Grid>
//           <Grid item xs={4}>
//             <Grid container justifyContent="center">
//               {/* 센터배치 */}
//               {/* {<Formation />} */}
//               {<SquadSetter />}
//             </Grid>
//           </Grid>
//           <Grid item xs={4}>
//             {<List />}
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   )
// }

export default TeamManage