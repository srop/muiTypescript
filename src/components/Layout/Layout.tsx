import { ReactNode } from "react";
import Box from '@mui/material/Box';
import { DrawerContextProvider } from "context/drawer-context";
import Header from "components/Layout/Header";
import Navbar from "components/Layout/Menu/Navbar";
import Footer from "components/Layout/Footer";

type Props = {
  children: NonNullable<ReactNode>;
};


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <DrawerContextProvider>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* app bar */}
        <Header />

        {/* side drawer */}
        <Navbar />

        {/* main content */}
        <Box component="main" sx={{ flexGrow: 1, paddingTop: "80px" }}>
          <main style={{ flex: 1 }}>{children}</main>
          {/*  
           <div className={classes.page}>
            {children}
          </div> */}

        </Box>   
        <Footer/>
       </Box> 
    </DrawerContextProvider>

  )
}

export default Layout