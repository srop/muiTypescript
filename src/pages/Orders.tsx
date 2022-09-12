import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CustomSnackbar from 'components/Common/CustomSnackbar';
import CustomAlert from 'components/Common/CustomAlert';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import CustomDialog from 'components/Common/CustomDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import CustomizedButtons from 'components/Common/CustomButton'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export interface State extends SnackbarOrigin {
  open: boolean;
}
export default function Orders() {
  const [value, setValue] = React.useState(0);
  const [isOpen, setisOpen] = React.useState(false);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

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


      <br></br>



      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}
