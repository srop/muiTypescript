import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Employee from "pages/Employee";
import Orders from "pages/Orders";
import Login from "public/login";
import Error from "public/error";
import Table from "pages/Table";

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, red, green, cyan, grey } from '@mui/material/colors'
import PrivateRoute from "components/Layout/Layout";
import PublicLayout from "components/Layout/PublicLayout";
import Level2 from "pages/multiLevel/level2";
const theme = createTheme({
  palette: {
    primary: {
      light: blue[400],
      main: blue[500],
      dark: blue[600],
    },
    secondary: {

      main: grey[600],
      dark: grey[700],
    },
    info: {
      main: cyan[500],
      dark: cyan[600],
      contrastText: '#fff',
    },
    error: {
      main: red[500],
      dark: red[600]
    },
    success: {
      main: green.A700,
      dark: green.A700,
      contrastText: '#fff',
    }
  },

  typography: {
    fontFamily: [
      "Quicksand",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Quicksand';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
    
        }
      `,
    },
  },

})

declare module "@mui/private-theming" {
  interface DefaultTheme {
    spacing: (spacing: number) => string;
    mixins: (mixins: number) => string;
  }
}
function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>

        <Routes>


          <Route element={<PrivateRoute />}>
            <Route element={<Orders />} path="/" />
            <Route element={<Employee />} path="/Employee" />
            <Route element={<Orders />} path="/orders" />
            <Route element={<Table />} path="/table" />
            <Route element={<Level2 />} path="/level2" />
          </Route>
          <Route element={<PublicLayout />}>
            {/* <Route element={<Login />} path="/login" /> */}
          </Route>
          <Route element={<Error />} path="/error" />
          <Route element={<Login />} path="/login" />
        </Routes>


      </Router>
    </ThemeProvider>

  );
}

export default App;
