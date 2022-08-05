import { ThemeProvider } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Badge, createTheme, CssBaseline, ListItemAvatar, ListItemButton, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getCurrentTheme } from '../../assets/theme';
import { useColorMode } from '../../context/ColorModeContext';
import { useLoggedUser } from '../../context/LoggedUserContext';
import { NappLogo } from '../UI/NappLogo/NappLogo';
import { DrawerIcon } from './DrawerIcon';
import { AppBar, Drawer, DrawerHeader } from './LayoutStyledComponents';
import { NotificationsPopper } from './NotificationsPopper';

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const { loggedUser, status, isLoggedIn } = useLoggedUser();
  const matches = useMediaQuery('(min-width:800px)');
  const navigate = useNavigate();

  const openNotifications = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  useEffect(() => {
    if (!isLoggedIn && status === 'error') {
      navigate('/login');
    }
  }, [status, isLoggedIn, navigate]);

  const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.setItem('auth-token', '');
    navigate('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NotificationsPopper
        id={id}
        open={openNotifications}
        anchorEl={anchorEl}
        theme={theme}
        setAnchorEl={setAnchorEl}
      />
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
            <ListItemButton sx={{ maxWidth: '55px', ml: 'auto', borderRadius: '60px' }} onClick={handleClick}>
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
              {matches && <ListItemText primary={loggedUser?.fullName} />}
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
          width: '100%',
          pl: 7,
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </ThemeProvider>
  );
};
