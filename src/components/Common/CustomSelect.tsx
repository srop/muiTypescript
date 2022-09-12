
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material/';
interface Ioption{
    id : string,
    title:string
}
export interface ISelect {
    name: string,
    label: string,
    value: string,
    error?: string | null,
    onChange: () => void,
    options: Ioption[]
}

const CustomSelect = (props: ISelect) => {
    const { name, label, value, error, onChange,options } = props
    return (
        <FormControl variant="outlined"
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>

    )
}

export default CustomSelect