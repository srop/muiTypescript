import React from "react";
import { Snackbar, Alert } from "@mui/material";

export enum  IVertical {
    top,
    bottom
}
export interface ISnackBar {

    message: string,
    isOpen: boolean,
    handleClose: () => void,
    severity: "success" | "error" | "warning" | "info",
    vertical:'top'|'bottom',
    horizontal:'left'|'right'|'center'

}

const CustomSnackbar = (props: ISnackBar) => {
    const { isOpen, handleClose, message, severity ,vertical,horizontal} = props;
    return (
        <div>
            <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{
                vertical: vertical,
                horizontal:horizontal
            }}>
                <Alert onClose={handleClose} severity={severity} variant="filled" >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CustomSnackbar;