import * as React from 'react'
import { Card, CardContent, Typography, Button, Box, FormControl, TextField } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export const FormCard = () => {
  const balances = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: Yup.object({
      address: Yup.string().required(''),
    }),
    onSubmit: (values) => {
      console.log({ values })
    },
  })

  return (
    <Card sx={{ padding: 3 }}>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Save account balances
        </Typography>
        <Typography variant="caption" sx={{ mb: 2 }}>
          Provide an Ethereum address to find out balances of DAI, USDC and Maker. Submit them to
          save a snapshot for future reference. At least one balance must be greater than zero.
        </Typography>
        <Box component="form" onSubmit={balances.handleSubmit}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <TextField
              id="address"
              label="Address"
              variant="standard"
              onChange={balances.handleChange}
            />
          </FormControl>
          <Button color="primary" variant="contained" type="submit" sx={{ my: 2 }} fullWidth>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
