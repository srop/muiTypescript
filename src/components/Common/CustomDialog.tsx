import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Button,
    DialogActions
  } from "@mui/material";
  
  export interface IModal {
    title: string,
    subtitle?: string,
    children: string,
    isOpen:boolean,
    handleClose: () => void,
    handleConfirm:()=> void,
    fullWidth:boolean,
    cancelText:string,
    confirmText?:string
}


  const CustomDialog = (props: IModal) => {
    // const handleConfirm = () => {
    //   alert("You Agreed!");
    //   props.handleClose();
    // };
    return (
      <Dialog open={props.isOpen} onClose={props.handleClose} maxWidth="sm"   fullWidth={props.fullWidth}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent style = {{fontSize:"1.25rem"}}>
          <DialogContentText>{props.subtitle}</DialogContentText>
          <Divider />
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="error">
            {props.cancelText}
          </Button>
          <Button onClick={props.handleConfirm} color="primary">
          {props.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default CustomDialog;
  