import React from 'react';
import { TextField } from '@mui/material/';
export interface IInputField {
    name: string,
    label: string,
    value: string,
    error?: string | null,
    onChange: () => void
}

const  CustomInput = (props: IInputField) => {
    const {name,label,value,error,onChange} = props
    return (
        <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...(error && {error:true,helperText:error})}
    />
    )
}

export default CustomInput