import React, { useState, useEffect } from 'react'
import { Grid, } from '@mui/material/';
import Button from '@mui/material/Button';
import { useForm, Form } from 'components/useForm';
import CustomInput from 'components/Common/CustomInput';
import CustomSelect from 'components/Common/CustomSelect';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}
interface IValidate {
    fullName: string,
    email: string,
    mobile: string,
    departmentId: string
}
export default function EmployeeForm() {
    let _errors: IValidate = {
        fullName: '',
        email: '',
        mobile: '',
        departmentId: '',
    }
    const validate = (fieldValues = values) => {
        let temp = { ..._errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
            console.log("temp",temp)
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        console.log("handleSubmit")
        e.preventDefault()
        if (validate()) {

            resetForm()
        }
    }
     const getDepartmentCollection = ()=>([
        { id: '1', title: 'Development' },
        { id: '2', title: 'Marketing' },
        { id: '3', title: 'Accounting' },
        { id: '4', title: 'HR' },
    ])
    
    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <CustomInput
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={() => handleInputChange}
                        error={_errors.fullName}
                    />
                    <CustomInput
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={() => handleInputChange}
                        error={_errors.email}
                    />
                    <CustomInput
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={() => handleInputChange}
                        error={_errors.mobile}
                    />
                    <CustomInput
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={() => handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>

                    <CustomSelect
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={() => handleInputChange}
                        options={getDepartmentCollection()}
                        error={_errors.departmentId}
                    />


                    <div>
                        <Button variant="contained" component="label" color="info" onClick={(e)=>handleSubmit(e)}>
                            Submit

                        </Button>
                        <Button variant="contained" component="label" color="error" onClick={resetForm}>
                            Reset

                        </Button>



                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}