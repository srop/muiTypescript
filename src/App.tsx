import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Notes from 'pages/Note'
import Create from 'pages/Create'
import Login from "pages/Login";
import './index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'
import Layout from "components/Layout/Layout";
import AuthProvider from "auth/AuthProvider";
import PrivateRoute from "auth/PrivateRoute";
import { Note } from "@mui/icons-material";
const theme = createTheme({
  palette: {
    primary: {
      light: '#4b9fea',
      main: blue[600],
    },
    secondary: {
      light: '#f6685e',
      main: red[500],
    },
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
              {/* <Route path="/"  element ={<Notes />} /> */}

              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Notes />
                 
                  </PrivateRoute>
                }
              />
              {/* <Route path="/create" element={<Create />} /> */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
