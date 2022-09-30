import {  useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DrawerContextProvider } from "context/drawer-context";
import Header from './Header';
import Navbar from "./Menu/Navbar";
import Footer from "./Footer";
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles({
  page: {
    background: '#F5F5F5',
    width: '100%',
    display: 'flex', flexWrap: 'wrap', flex: 1,
    flexDirection:"column",
    flexGrow: 1,

   minHeight: "calc(100vh - 70px)",
  },
  root: {
    display: 'flex',
  },
  pageheader: {
    background: "#fff",
    padding: "80px 0px 15px 15px",
    // borderBottom: "none",
    // position: "relative",
    // textAlign: "left",
    // width:"100%"
  },
  title: {
    padding: "0",
    margin: "0",
    fontSize: "1.25rem !important",
    lineHeight: "normal",
    fontWeight: "normal",
    color: "#37363E",
    paddingBottom: "6px",
  }

})

const Layout = (props: any) => {
  const classes = useStyles();
  const [title, setTitle]  = useState<string>('');
  const location = useLocation();
  
  useEffect(() => {
    
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);
  return (
    <DrawerContextProvider>
      <Box
        sx={{
          // textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* app bar */}
        <Header />
        <div style={{ display: "flex" }}>
          {/* side drawer */}
          <Navbar />
        
          <div className={classes.page}>
          <div className={classes.pageheader} >
            <Typography
              className={classes.title}
            >
              {title}
            </Typography>
          </div>
          {props.children ? props.children : <Outlet />}

          </div>
        </div>
        <Footer />
      </Box>
    </DrawerContextProvider>

  )
}

export default Layout