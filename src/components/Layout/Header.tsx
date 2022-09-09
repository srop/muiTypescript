import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDrawerContext } from "context/drawer-context";
import { styled } from "@mui/material/styles";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { makeStyles } from '@mui/styles';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'red',

  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)
    }
  },


}))

const drawerWidth = 240;
const Header = () => {
  const classes = useStyles();

  const { isOpened, toggleIsOpened } = useDrawerContext();

  interface AppBarProps extends MuiAppBarProps {
    isOpened?: boolean;
  }
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, isOpened }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(isOpened && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


  return (

    <>
      <AppBar
        position="static" className={classes.root}
        isOpened={isOpened}
        style={{ backgroundColor: "#399BFF", color: "white" }}
      >
        <Toolbar>
          <Grid container
            alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleIsOpened(!isOpened)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(isOpened && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mini variant drawer
            </Typography>
            {/* <Grid item>
            <InputBase
              placeholder="Search topics"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid> */}
            <Grid item sm></Grid>
            <Grid item style={{ display: "flex" }}>
              <IconButton >
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Badge>
              </IconButton>
              <Stack direction="row" alignItems="center" spacing={3} style={{ paddingLeft: "15px" }}>

                <Tooltip title="JM">
                  <Avatar src="https://picsum.photos/100" />
                </Tooltip>
                <Typography noWrap component="div">
                  Admin
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
       
      </AppBar>
      
    </>
  );
};

export default Header;