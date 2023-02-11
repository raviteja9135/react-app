import {AppBar,Box, Button, IconButton, Toolbar, Typography,MenuItem, Avatar, Tooltip, Menu} from '@mui/material'
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import AdbIcon from '@mui/icons-material/Adb';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navItems = ['Dashboard', 'Search'];
  const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Logout'];
  function  handleDrawerToggle () {

  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
  <div className={styles.Header} data-testid="Header">
    <AppBar component="nav" sx={{flowgrow: 1, display: { xs: 'flex', md: 'block' } }}>
        <Toolbar sx={{width: 1, display: {xs:'flex',md:'flex'}}}>
        <Box sx={{width: 0.9, flowgrow: 1, display: { xs: 'flex', md: 'flex' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className={styles.Logo}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            My Family
          </Typography>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link to={item}>{item}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{flexglow: 1, mt: '45px' }}
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
                  <Typography textAlign="center"><Link to={setting}>{setting}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
  </div>
)
            };

export default Header;
