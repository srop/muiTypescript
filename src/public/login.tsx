import React from 'react'
 import 'static/css/login.scss'
import bg from 'static/images/bg.svg';
import wave from 'static/images/wave.png';
import avatar from 'static/images/avatar.svg';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
interface IState {
  username: string;
  password: string;
  showPassword: boolean;
}

function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = React.useState<IState>({
    username: '',
    password: '',

    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <div className='body-login'>
      <img className="wave" src={wave}></img>
      <div className="login-container">

        <div className="img">
          <img src={bg} />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img src={avatar} />
            <h2 className="title">Welcome</h2>
            <div >

              {/* <h5>Username</h5> */}
              <TextField
                id="input-with-icon-textfield"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />

            </div>
            <div style={{ paddingTop: "20px" }}>
              <TextField
                id="input-with-icon-textfield"
                label="Password"
                type={values.showPassword ? 'text' : 'password'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                      </IconButton>
                    </InputAdornment>

                  )
                }}
                variant="standard"
                fullWidth
              />
            </div>
            <a href="#" className='a-login'>Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default login