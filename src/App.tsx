import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Notes from 'pages/Note'
import Create from 'pages/Create'
import Employee from "pages/Employee";
import Orders from "pages/Orders";
import './index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, red, green, cyan, grey } from '@mui/material/colors'
import Layout from "components/Layout/Layout";
import AuthProvider from "auth/AuthProvider";
import PrivateRoute from "auth/PrivateRoute";
import { Home } from "pages/home";
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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
             

              {/* <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Notes />

                  </PrivateRoute>
                }
              /> */}
                <Route path="/Dashboard" element={<Orders />} />
              <Route path="/create" element={<Create />} />
              <Route path="/Employee" element={<Employee />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Layout>
          
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
