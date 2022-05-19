import * as React from 'react';
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
//import Google from "./Google";
import image from "../img/로고.png"

const pages = ['팀 관리', '팀 선택', '선수 검색'];
const settings = ['내 정보', '로그아웃'];
// const REST_API_KEY = "526de075efd0393b1b3dd0cbc43354ed";
// const REDIRECT_URI = "http://localhost:3000/login/oauth/kakao";
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    console.log(event.currentTarget.key)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClick = (event) => {
    console.log(event.currentTarget.key)
  }
  let login = 1;

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar disableGutters>
        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , src:"../img/로고"}} /> */}
        {/* 얘가 아이콘이야 */}
        {/* <div style = {{backgroundImage:"../img/로고"}} /> */}
        <img src={image}/>
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
                <MenuItem key={page} onClick={(e) => handleCloseNavMenu(e)}>
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
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
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
        <>
            <Button
              onClick={onClick}
              key="login"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              로그인
            </Button>
            <Button
              onClick={onClick}
              key="register"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              회원가입
            </Button>
          </>
          }
          {/* 로그인 회원가입 클릭해서 기능구현 */}
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
