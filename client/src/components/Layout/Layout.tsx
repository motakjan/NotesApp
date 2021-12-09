import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, Tooltip } from '@mui/material';
import { getCurrentTheme } from '../../assets/theme';
import { useColorMode } from '../../context/ColorModeContext';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { DrawerHeader, Drawer, AppBar } from './LayoutStyledComponents';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';

const tasksIcons = [<EventNoteIcon />, <NoteAddRoundedIcon />, <AssignmentReturnedIcon /> ];
const profileIcons = [<DateRangeIcon />, <MailIcon />, <PersonIcon />, <SettingsIcon />];

export const Layout: React.FC<React.ReactNode> = ({ children }) => {
    const { mode, toggleColorMode } = useColorMode();

    const theme = React.useMemo(
        () => createTheme(getCurrentTheme(mode)),
        [mode]
    );
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex' 
                }}
            >
                <CssBaseline />
                <AppBar
                    position="fixed"
                    open={open}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...open && {
                                    display: 'none' 
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            NotesApp
                        </Typography>
                        <Tooltip 
                            title={'Switch to ' + (mode === 'light' ? 'dark' : 'light') + ' theme'} 
                            placement="bottom-start"
                        >
                            <IconButton
                                sx={{
                                    ml: 'auto' 
                                }}
                                onClick={toggleColorMode}
                                color="inherit"
                            >
                                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? 
                                <ChevronRightIcon />
                                : 
                                <ChevronLeftIcon />
                            }
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Tasks', 'Add Task', 'Join Task'].map(
                            (text, index) => (
                                <Tooltip 
                                    title={text} 
                                    placement="right-start"
                                >
                                    <ListItem
                                        button
                                        key={text}
                                    >
                                        <ListItemIcon >                          
                                            { tasksIcons[index] }
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                </Tooltip>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['Inbox', 'Calendar', 'Profile', 'Settings'].map((text, index) => (
                            <Tooltip 
                                title={text} 
                                placement="right-start"
                            >
                                <ListItem
                                    button
                                    key={text}
                                >
                                    <ListItemIcon>
                                        {profileIcons[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Tooltip>
                        ))}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1, p: 3 
                    }}
                >
                    <DrawerHeader />
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
};
