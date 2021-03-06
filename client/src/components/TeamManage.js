import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllAboutTeam from './AllAboutTeam'
import Board from './Board'
import NoTeam from './NoTeam'
import BigList from './BigList'
import Calendar from './Calendar'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import PortraitIcon from '@mui/icons-material/Portrait';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import DvrIcon from '@mui/icons-material/Dvr';

const TeamManage = () => {
  const team = 1//토큰으로 팀이 있는지 없는지 물어봐야될듯

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
    <>
      {team === 1 ?
        <div className='box'>
          <Box
            sx={{ flexGrow: 1, bgcolor: 'parent', display: 'flex', height: '100%' }}
          //왼쪽 사이드 앱바 설정
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{ borderRight: 1, borderColor: 'divider', minWidth: '20vh' }}
            >
              <Tab icon={<AssignmentIndIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="팀 정보" sx={{ ml: 2, justifyContent: 'flex-start', height: '8vh', mt: 2, fontWeight: 'bold', color: 'black', fontSize: 20 }} />
              <Tab icon={<PortraitIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="선수 관리" sx={{ minWidth: '200px', ml: 2, justifyContent: 'flex-start', height: '8vh', fontWeight: 'bold', color: 'black', fontSize: 20 }} />
              {/* min은 보류 */}
              <Tab icon={<CalendarTodayIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="팀 일정" sx={{ ml: 2, justifyContent: 'flex-start', height: '8vh', fontWeight: 'bold', color: 'black', fontSize: 20 }} />
              <Tab icon={<WysiwygIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="팀 기록" sx={{ ml: 2, justifyContent: 'flex-start', height: '8vh', fontWeight: 'bold', color: 'black', fontSize: 20 }} />
              <Tab icon={<PhotoCameraBackIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="사진" sx={{ ml: 2, justifyContent: 'flex-start', height: '8vh', fontWeight: 'bold', color: 'black', fontSize: 20 }} />
              <Tab icon={<DvrIcon sx={{ fontSize: 40 }} />} iconPosition="start" label="게시판" sx={{ ml: 2, justifyContent: 'flex-start', height: '8vh', fontWeight: 'bold', color: 'black', fontSize: 20 }} />
            </Tabs>

            <TabPanel value={value} index={0} className='Test'>
              {<AllAboutTeam />}
              {/* 팀정보 */}
            </TabPanel>

            <TabPanel value={value} index={1}>
              {<BigList />}
              {/* 선수관리 - 리스트 */}
            </TabPanel>

            <TabPanel value={value} index={2}>
              {/* 캘린더 db에 있나 확인하고 없으면 NoCalendar로 있으면 Calendar로 */}
              {<Calendar />}
              {/* 팀 일정 */}
            </TabPanel>

            <TabPanel value={value} index={3}>
              팀 기록
            </TabPanel>

            <TabPanel value={value} index={4}>
              사진 게시판
            </TabPanel>

            <TabPanel value={value} index={5}>
            {<Board />}
            </TabPanel>
          </Box>
        </div>
      : <>{<NoTeam />}</>}
    </>
  )
}

export default TeamManage