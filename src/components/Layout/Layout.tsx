import { ReactNode , useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DrawerContextProvider } from "context/drawer-context";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Menu/Navbar";
import Footer from "components/Layout/Footer";
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import { useLocation } from 'react-router-dom';
type Props = {
  children: NonNullable<ReactNode>;
};

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

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [title, setTitle]  = useState<string>('');
  const location = useLocation();
  
  useEffect(() => {
    console.log(location)
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
            {children}

          </div>
        </div>
        <Footer />
      </Box>
    </DrawerContextProvider>

  )
}

export default Layout