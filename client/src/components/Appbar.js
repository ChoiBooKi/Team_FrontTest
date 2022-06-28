import React, { useState, useEffect }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Google from "./Google";
import image from "../img/흰로고.png"
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import './Appbar.css'
import axios from 'axios';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';

const pages = ['팀 관리', '팀 목록', '선수 목록'];
const settings = ['내 정보', '로그아웃'];
const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElAlarm, setAnchorElAlarm] = useState(null);
  const [Modalis, SetModalis] = useState(false)
  const [Alarm, SetAlarm] = useState(null)

  const navigate = useNavigate()

  useEffect(() => { 
    const fetchData = async () => {
      const res = await axios.get("/api/alarm")
      SetAlarm(res.data);
    }
    setInterval(() => fetchData(), 5000); // 5초마다 데이터 update
  }, []);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenAlarmMenu = (event) => {
    setAnchorElAlarm(event.currentTarget);
  };
  const handleCloseAlarmMenu = (e) => {
    setAnchorElAlarm(null);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch(page){
      case "팀 관리":
        // if(팀이 있으면)
        navigate('/teammanage')
        // else if(팀이 없으면) 팀생성 페이지로 이동
        break
      case "팀 선택":
        console.log('팀선택')
        break
      case "선수 검색":
        console.log('선수검색')
        break
      default:
        break
    }
  };

  const removeAlarm = (id) => {
    console.log(id)
    axios.delete('/api/deletealarm', {
      params: {
        _id: id
      }
    })
    .then(res => {
      SetAlarm(res.data)
    })
    .catch(err => console.log(err))
  }

  const handleCloseUserMenu = (e) => {
    // if(e.currentTarget.id === '내 정보'){
    // } else if( e.currentTarget.id === '로그아웃' )
    setAnchorElUser(null);
  };

  const onClick = (event) => {
    SetModalis(true)
  }
  let login = 1;

  return (
    <div>
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}> 
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        <Google/>
      </Modal> 
      {/* 로그인 회원가입 버튼 누르면 나오는 모달 */}
      
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', padding: "1%"}}>
        <Toolbar disableGutters>
          <a href='/'><img src={image} alt ="에러입니다" style={{marginLeft: "50px", marginRight: "30px", maxWidth:"250px"}}/></a>
          {/* SENT로고 */}

          {login === 1 ? 
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={(e) => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          : null }
          {/* 로그인이 되어 있을때 페이지 이동 버튼 나오고 로그인 안되어 있으면 아무것도 안나옴 */}
          {/* 이 위에 태그는 페이지가 작을때 나오는 햄버거 메뉴 */}

          {login === 1 ? 
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  className="page"
                  sx={{ my: 2, color: 'white', display: 'block', fontSize:"25pt", marginLeft:"40px"}}
                >
                  {page}
                </Button>
            ))}
          </Box>
          : null}
          {/* 로그인이 되어 있을때 페이지 이동 버튼 나오고 로그인 안되어 있으면 아무것도 안나옴 */}
          {/* 이 위에는 페이지가 클 때 나오는 페이지 이동 버튼 */}

          {login === 1 ? 
          <>
            {Alarm === null || Alarm.length === 0 ? 
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenAlarmMenu}
                  color="inherit"
                >
                  <NotificationsNoneIcon />
                </IconButton>
                <Menu
                anchorEl={anchorElAlarm}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElAlarm)}
                onClose={handleCloseAlarmMenu}
              >
                <div>새로운 알림이 없습니다.</div>
              </Menu>
            </div>
              :
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenAlarmMenu}
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorElAlarm}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElAlarm)}
                  onClose={handleCloseAlarmMenu}
                >
                  {
                    Alarm.map((alarm) => 
                    alarm.from === "team" ? 
                      <MenuItem key={alarm._id} onClick={() => removeAlarm(alarm._id)}>
                        <Typography textAlign="center">'{alarm.teamname}'에서 팀장 '{alarm.name}'가(이) 팀 가입 신청을 권유 하였습니다.</Typography>
                        {/* 온클릭이벤트에서 key로 어떤 알림인지 구분한다음 클릭하면 바로 백한테 해당 알람 remove 요청 */}
                      </MenuItem>
                    :
                      <MenuItem key={alarm._id} onClick={() => removeAlarm(alarm._id)}>
                        <Typography textAlign="center">선수 '{alarm.name}'가(이) 팀 가입 신청을 하였습니다.</Typography>
                      </MenuItem>
                    )
                  }
                </Menu>
              </div>
            }
            {/* 메뉴 넣어놓고 map으로 알림내용 보여주도록 만들어야됨 */}
            <Box sx={{ flexGrow: 0 , mr: 5}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                {/* 여기 위에 아바타를 해당 선수의 아바타 사진으로 넣어주야아 한다 */}
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem id={setting} key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </>
            : 
            <Button
              onClick={onClick}
              key="login"
              sx={{ my: 2, color: "white", display: "block" , marginRight: "50px", fontSize:"20pt"}}
            >
              로그인/회원가입
            </Button>
            }
            {/* 로그인 돼있으면 아바타 안돼있으면 로그인/회원가입 띄우기 */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
