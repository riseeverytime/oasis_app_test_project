import * as React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
    }}
  >
    <CircularProgress />
  </Box>
)
