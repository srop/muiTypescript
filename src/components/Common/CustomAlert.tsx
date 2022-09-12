
import {  Alert } from "@mui/material";
export interface IAlert {

    message: string,
    severity: "success" | "error" | "warning" | "info",
    icon?: any
    variant?:"filled"|"outlined"
}

const CustomAlert = (props: IAlert) => {
    const { message, severity, icon,variant } = props;
    return (
        <div>

            <Alert icon={icon} severity={severity} variant = {variant}>
                {message}
            </Alert>

        </div>
    );
}

export default CustomAlert;