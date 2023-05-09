import * as React from 'react'
import { Card, CardContent, Typography, Button, Box, FormControl, TextField } from '@mui/material'

type FormCardProps = {
  address: string
  onSubmit: () => void
  onChange: (e: React.ChangeEvent) => void
  errorText: string
  submitted: boolean
  isValid: boolean
}

export const FormCard = ({
  address,
  onSubmit,
  onChange,
  errorText,
  isValid,
  submitted,
}: FormCardProps) => (
  <Card sx={{ padding: 3 }}>
    <CardContent>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Save account balances
      </Typography>
      <Typography variant="caption" sx={{ mb: 2 }}>
        Provide an Ethereum address to find out balances of DAI, USDC and Maker. Submit them to save
        a snapshot for future reference. At least one balance must be greater than zero.
      </Typography>
      <Box component="form" onSubmit={onSubmit}>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            id="address"
            label="Address"
            name="address"
            variant="standard"
            value={address}
            placeholder="0x2655...0aa9"
            onChange={onChange}
            error={!isValid}
            helperText={errorText}
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{ my: 2 }}
          disabled={!isValid || !address}
          fullWidth
        >
          {submitted ? 'Submitted' : 'Submit'}
        </Button>
      </Box>
    </CardContent>
  </Card>
)
