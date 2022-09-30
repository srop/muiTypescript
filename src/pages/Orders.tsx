import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CustomSnackbar from 'components/Common/CustomSnackbar';
import CustomAlert from 'components/Common/CustomAlert';
import CustomDialog from 'components/Common/CustomDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import  { SnackbarOrigin } from '@mui/material/Snackbar';



export interface State extends SnackbarOrigin {
  open: boolean;
}
export default function Orders() {
  const [isOpen, setisOpen] = React.useState(false);
  // const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;



  const handleOpen = () => {
    setisOpen(true);
  };

  const handleClose = () => {
    setisOpen(false);
  };
  const handleConfirm = () => {
    alert("You Agreed!");
    handleClose();
  };

  // const openSnackbar = () => {
  //   setIsAlertOpen(true)
  // }
  const handleSnackClose = () => {
    setState({ ...state, open: false });
  }


  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };



  return (
    <>

      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card >
              <Typography sx={{ m: 2 }} variant="h5" >Variant</Typography>
              <CardContent>
                <Button sx={{ m: 2 }} variant="contained" color="success">
                  success
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="primary">
                  primary
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="error">
                  error
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="warning">
                  warning
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="info">
                  info
                </Button>
                <Button sx={{ m: 2 }} variant="contained" color="secondary">
                  secondary
                </Button>

              </CardContent>
            </Card>
          </Grid>
          <Grid xs={6}>

            <Card >
              <Typography sx={{ m: 2 }} variant="h5">outlined</Typography>
              <CardContent>
                <Button sx={{ m: 2 }} variant="outlined" color="success">
                  success
                </Button>
                <Button sx={{ m: 2 }} variant="outlined" color="primary">
                  primary
                </Button>
                <Button sx={{ m: 2 }} variant="outlined" color="error">
                  error
                </Button>
                <Button sx={{ m: 2 }} variant="outlined" color="warning">
                  warning
                </Button>
                <Button sx={{ m: 2 }} variant="outlined" color="info">
                  info
                </Button>
                <Button sx={{ m: 2 }} variant="outlined" color="secondary">
                  secondary
                </Button>

              </CardContent>
            </Card>

          </Grid>

        </Grid>
      </Box>


      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card >
              <Typography sx={{ m: 2 }} variant="h5" >CustomAlert filled </Typography>
              <CardContent>
                <CustomAlert severity="info" message='Info' variant='filled' />
                <br></br>
                <CustomAlert severity="success" message='Success' variant='filled' />
                <br></br>
                <CustomAlert severity="warning" message='Warning' variant='filled' />
                <br></br>

                <CustomAlert severity="error" message='Error' variant='filled' />
                <br></br>


              </CardContent>
            </Card>
          </Grid>
          <Grid xs={6}>

            <Card >
              <Typography sx={{ m: 2 }} variant="h5" >CustomAlert Default </Typography>
              <CardContent>
                <CustomAlert severity="info" message='Info' />
                <br></br>
                <CustomAlert severity="success" message='Success' />
                <br></br>
                <CustomAlert severity="warning" message='Warning' />
                <br></br>

                <CustomAlert severity="error" message='Error' />
                <br></br>


              </CardContent>
            </Card>

          </Grid>

        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, m: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card >
              <Typography sx={{ m: 2 }} variant="h5" >Dialog message </Typography>

              <Button sx={{ m: 2 }} variant="contained" color="primary" onClick={handleOpen}>
                Show Dialog
              </Button>


              <CustomDialog title="confirmation" isOpen={isOpen} handleClose={handleClose}
                children="Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled "
                fullWidth={true} handleConfirm={handleConfirm}
                cancelText='Cancel' confirmText='Agree'
              />
            </Card>
          </Grid>



          <Grid xs={6}>
            <Card >
              <Typography sx={{ m: 2 }} variant="h5" >Notification message </Typography>
              <CardContent>

                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'top',
                  horizontal: 'right',
                })} >Top - Right</Button>

                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'top',
                  horizontal: 'left',
                })} >Top - left</Button>
                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'top',
                  horizontal: 'center',
                })} >Top - center</Button>

                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'bottom',
                  horizontal: 'right',
                })} >Top - Right</Button>

                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'bottom',
                  horizontal: 'left',
                })} >Top - left</Button>
                <Button color="primary" variant="contained" sx={{ m: 2 }} onClick={handleClick({
                  vertical: 'bottom',
                  horizontal: 'center',
                })} >Top - center</Button>


                <CustomSnackbar isOpen={open} handleClose={handleSnackClose} vertical={vertical}
                  message="Lorem Ipsum is simply dummy text of the printing and typesetting" severity="success" horizontal={horizontal} />

            

              </CardContent>

            </Card>
          </Grid>


        </Grid>
      </Box>


      
    </>
  );
}
