import React, { useState }  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Google from "./Google";
import image from "../img/흰로고.png"//로고 색 변경 해야됨
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import './Appbar.css'

const pages = ['팀 관리', '팀 목록', '선수 목록'];
const settings = ['내 정보', '로그아웃'];
const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [Modalis, SetModalis] = useState(false)

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch(page){
      case "팀 관리":
        navigate('/teammanage')
        break
      case "팀 선택":
        console.log('팀선택')
        break
      case "선수 검색":
        console.log('선수검색')
        break
      default:
        alert('에러가 발생했습니다.')
        break
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClick = (event) => {
    SetModalis(true)
  }
  let login = 1;

  return (
    //<div style={{position:"absolute"}}>
    <div>
    {/* <div style={{backgroundColor:"#141414"}}> */}
      <Modal isOpen={Modalis} onRequestClose={() => SetModalis(false)} ariaHideApp={false}> 
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        <Google/>
      </Modal>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', padding: "1%"}}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , src:"../img/로고"}} /> */}
          {/* 얘가 아이콘이야 */}
          {/* <div style = {{backgroundImage:"../img/로고"}} /> */}
          <a href='/'><img src={image} style={{marginLeft: "50px", marginRight: "30px", maxWidth:"330px"}}/></a>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ㅇㅇ
          </Typography> 얘는 필요가 없는데 위에있는 매개변수들 참고하자*/}
          {/* 얘는 평소에 나오는 로고 */}
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
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> 얘는 작아지면 나오는 아이콘 */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            얘는 작아지면 나오는 로고
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {login === 1 ? pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                // 이건뭐지??
                className="page"
                sx={{ my: 2, color: 'white', display: 'block', fontSize:"2rem", marginLeft:"40px"}}
              >
                {page}
              </Button>
            )): null}
          </Box>
          {login === 1 ? 
            <Box sx={{ flexGrow: 0 , mr: 5}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  {/* 로그인 돼있으면 아바타 안돼있으면 로그인/회원가입 띄우기 */}
                </IconButton>
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            : 
            <Button
              onClick={onClick}
              key="login"
              sx={{ my: 2, color: "white", display: "block" , marginRight: "50px", fontSize:"1.25rem"}}
            >
              로그인/회원가입
              {/* 로그인 회원가입 하나로 통일하고 온클릭 이벤트 하나로 뭉쳐야됨 */}
            </Button>
            }
            {/* 로그인 회원가입 클릭해서 기능구현 */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
