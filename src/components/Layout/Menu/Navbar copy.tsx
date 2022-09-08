
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from "react-router-dom";
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useDrawerContext } from "context/drawer-context";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import useAuth from 'auth/useAuth';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%', 
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2),
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        date: {
            flexGrow: 1
        },
        //   toolbar: theme.mixins.toolbar
    }
})
const Navbar = () => {
   // const [menuIndex, setMenuIndex] = useState(-1);
    const { isOpened, toggleIsOpened } = useDrawerContext();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyles();

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));


    
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create',
            items: [
                {
                  text: "Technical Analysis",
                  path: '/tech'
                },
                {
                    text: "Fundamental Analysiss",
                    path: '/fundamental'
                },
              
              ]
        },
    ];

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );
    const auth = useAuth();
    const handleLogin = () => {
        auth?.signIn();
    }
    return (
        <Drawer variant="permanent" open={isOpened}>
            <DrawerHeader>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width={120} height="auto"></img>
                <IconButton onClick={() => toggleIsOpened(!isOpened)}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <div>User:{JSON.stringify(auth?.user)}</div>
            <button onClick={handleLogin}>Login</button>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => navigate(item.path)}
                        disablePadding sx={{ display: 'block' }}
                        className={location.pathname === item.path ? classes.active : ''}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: isOpened ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: isOpened ? 3 : 'auto',
                                justifyContent: 'center',
                            }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: isOpened ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
        </Drawer>

    );
};

export default Navbar;