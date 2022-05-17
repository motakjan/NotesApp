import { ThemeProvider } from '@emotion/react';
import { Avatar, Badge, createTheme, CssBaseline, ListItemAvatar, ListItemButton, Tooltip } from '@mui/material';
import { getCurrentTheme } from '../../assets/theme';
import { useColorMode } from '../../context/ColorModeContext';
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Drawer, DrawerHeader } from './LayoutStyledComponents';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { NappLogo } from '../UI/NappLogo/NappLogo';
import { DrawerIcon } from './DrawerIcon';
import { blue, grey } from '@mui/material/colors';
import { useLoggedUser } from '../../context/LoggedUserContext';

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const { mode, toggleColorMode } = useColorMode();
  const { loggedUser, status, isLoggedIn } = useLoggedUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && status === 'error') {
      navigate('/login');
    }
  }, [status, isLoggedIn, navigate]);

  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.setItem('auth-token', '');
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <CssBaseline />
        <AppBar open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && {
                  display: 'none',
                }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <NappLogo width="32px" height="32px" fill="white" />
            <Tooltip title="Notifications" placement="bottom">
              <ListItemButton sx={{ maxWidth: '55px', ml: 'auto', borderRadius: '60px' }}>
                <ListItemIcon>
                  <Badge badgeContent={1} color="error">
                    <NotificationsActiveIcon sx={{ color: grey[50] }} />
                  </Badge>
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
            <Tooltip title="Profile" placement="bottom">
              <ListItemButton sx={{ borderRadius: '60px', maxWidth: 'fit-content', padding: '3px 12px' }}>
                <ListItemAvatar sx={{ minWidth: '36px' }}>
                  <Avatar
                    sx={{ bgcolor: blue[100], color: blue[600] }}
                    alt={loggedUser?.fullName}
                    src={loggedUser?.image}
                  >
                    {`${loggedUser?.firstName.charAt(0)}${loggedUser?.lastName.charAt(0)}`}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={loggedUser?.fullName} />
              </ListItemButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <DrawerIcon title="Dashboard" onClick={() => navigate('/dashboard')} icon={<DashboardIcon />} open={open} />
            <DrawerIcon
              title="Add Dashboard"
              onClick={() => navigate('/add_dashboard')}
              icon={<DashboardCustomizeIcon />}
              open={open}
            />
          </List>
          <Divider />
          <List>
            <DrawerIcon title="Calendar" onClick={() => console.log('calendar')} icon={<DateRangeIcon />} open={open} />
            <DrawerIcon
              title={'Switch to ' + (mode === 'light' ? 'dark' : 'light') + ' theme'}
              onClick={toggleColorMode}
              icon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              open={open}
            />
            <DrawerIcon title="Logout" onClick={handleLogout} icon={<LogoutIcon />} open={open} />
            <DrawerIcon title="Settings" onClick={() => console.log('settings')} icon={<SettingsIcon />} open={open} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
