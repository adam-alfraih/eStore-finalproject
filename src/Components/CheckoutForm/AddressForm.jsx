import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {
    const methods = useForm();
    
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name'/>
                        <FormInput required name='lastName' label='Last name'/>
                        <FormInput required name='address1' label='Address'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='city'/>
                        <FormInput required name='postalCode' label='Postal Code'/>
                    </Grid>
                    <Button Button type="submit" variant="contained" color="primary" size="large" style={{ marginTop: '20px', marginLeft: '465px'}}>
                    Next
                    </Button>
                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm
