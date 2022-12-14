
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDrawerContext } from "context/drawer-context";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import useAuth from 'auth/useAuth';
import logo from 'static/images/NITMX-Logo-Reversed.png';
import AppMenu from "./AppMenu";
const drawerWidth = 240

const Navbar = (props) => {
    // const [menuIndex, setMenuIndex] = useState(-1);
    const { isOpened, toggleIsOpened } = useDrawerContext();
    const theme = useTheme();


    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        backgroundColor: '#58666E ',
     // backgroundImage: "linear-gradient(90deg, rgba(18,57,133,1) 0%, rgba(52,95,180,1) 95%)",
        color: "#ffffff99",
        fontFamily: 'Quicksand'
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: '#58666E ',
       // backgroundImage: "linear-gradient(90deg, rgba(18,57,133,1) 0%, rgba(52,95,180,1) 95%)",
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
        <Drawer variant="permanent" open={isOpened} >
            <DrawerHeader style = {{backgroundColor:"#1d84ecf7"}} >
                <img src={logo} width={120} height="auto"></img>
                <IconButton onClick={() => toggleIsOpened(!isOpened)}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon style={{color:"white"}} /> : <ChevronLeftIcon  style={{color:"white"}} />}
                </IconButton>
            </DrawerHeader>
            <Divider />
{/* 
            <div>User:{JSON.stringify(auth?.user)}</div>
            <button onClick={handleLogin}>Login</button> */}
            <AppMenu />
            
        </Drawer>

    );
};

export default Navbar;