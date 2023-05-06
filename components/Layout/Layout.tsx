import * as React from 'react'
import { styled, Box, Container } from '@mui/material'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <LayoutWrapper>
    <Box component="header">
      <Header />
    </Box>
    <Box component="main" sx={{ flexGrow: 1 }}>
      <DrawerHeader />
      <Container>{children}</Container>
    </Box>
    <Box component="footer">
      <Footer />
    </Box>
  </LayoutWrapper>
)

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))
