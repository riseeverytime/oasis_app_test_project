import * as React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'

const userInfo = {
  name: 'Christopher Allen',
  githubUrl: 'https://github.com/riseeverytime',
  githubUsername: 'riseeverytime',
}

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Oasis App
      </Typography>
      <Divider />
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ zIndex: 0, position: 'relative' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={3} sx={{ width: '100%', justifyContent: 'center' }}>
            <Box margin={2}>
              <Image src="/oasis-icon-152x152.png" width={100} height={100} alt="Oasis Logo" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ my: 1 }}>
                {userInfo.name}
              </Typography>
              <p>Oazo Apps full stack candidate</p>
              <a href={userInfo.githubUrl} target="_blank" rel="noreferrer">
                {`@${userInfo.githubUsername}`}
              </a>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export { Header }
