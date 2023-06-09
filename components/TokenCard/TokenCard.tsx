import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent, Typography, Stack, Box } from '@mui/material'

import { TokenBalance } from '../../type'

type TokenCardProps = {
  tokenBalances: TokenBalance[]
  submitted: boolean
}

export const TokenCard = ({ submitted, tokenBalances }: TokenCardProps) => (
  <Card sx={{ padding: 3 }}>
    <CardContent>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Token Balances
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
        <Image src="/dai_circle_color.svg" width={30} height={30} alt="Dai" />
        <Typography>Dai</Typography>
        <Box sx={{ display: 'flex', marginLeft: 'auto!important' }}>
          <div>{submitted ? tokenBalances[0].balance : '---'}</div>
          <div> DAI</div>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
        <Image src="/usdc_circle_color.svg" width={30} height={30} alt="Usdc" />
        <Typography>Usdc Coin</Typography>
        <Box sx={{ display: 'flex', marginLeft: 'auto!important' }}>
          <div>{submitted ? tokenBalances[1].balance : '---'}</div>
          <div> USDC</div>
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" mb={1}>
        <Image src="/maker_circle_color.svg" width={30} height={30} alt="Maker" />
        <Typography>Maker</Typography>
        <Box sx={{ display: 'flex', marginLeft: 'auto!important' }}>
          <div>{submitted ? tokenBalances[2].balance : '---'}</div>
          <div> MKR</div>
        </Box>
      </Stack>
    </CardContent>
  </Card>
)
