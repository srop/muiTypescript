

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import { makeStyles, createStyles } from '@mui/styles';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },


        input: {
            "&:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset",
                // WebkitTextFillColor: '#fff',

            }
        }

    }),
);

export const Home = () => {
    const classes = useStyles();
    return (
        <div className='container' style={{ backgroundColor: "#f7f9f9" }}>

            <div col-lg-5 col-md-8>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ paddingTop: "50px" }}>
                        <img src="content/images/NITMX-Logo.png" alt="Logo" width="250" height="100" />
                    </Grid>

                    <form>
                        <div className="formcontainer">
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item xs={12} style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "20px" }}>
                                    Welcome to PromptBiz portal
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center", paddingTop: "20px" }}>
                                    <TextField label="Username"
                                        inputProps={{ className: classes.input }}
                                        fullWidth required variant="outlined" />
                                    {/* <CssTextField label="Username" value={userName} onChange={handleUserNameChange} fullWidth required variant="outlined" /> */}
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center", paddingTop: "20px" }}>
                                    <TextField
                                        label="Password"


                                        variant="outlined"
                                        InputProps={{
                                            className: classes.input,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"

                                                    >
                                                        <Visibility />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'right' }}>
                                    <Link
                                        href="#"
                                        variant="body2"

                                        style={{
                                            fontSize: "1.25rem",

                                            fontFamily: 'DB Heaven'
                                        }}
                                    >
                                        Did you forget your password?
                                    </Link>
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center", paddingTop: "20px" }}>
                                    <Button variant="contained" color="primary" fullWidth type="submit" size="large">
                                        Sign in
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    )
}
