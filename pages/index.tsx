import type { NextPage } from 'next'
import * as React from 'react'
import Head from 'next/head'
import { Grid } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Layout } from '../components/Layout'
import { TokenCard } from '../components/TokenCard'
import { FormCard } from '../components/FormCard'
import { getTokenBalance } from '../eth-sdk/web3'
import { TokenBalance } from '../type'
import { Loader } from '../components/Loader'

const Home: NextPage = () => {
  const [submitted, setSubmitted] = React.useState(false)
  const [tokenBalances, setTokenBalances] = React.useState<TokenBalance[]>([])
  const [loading, setLoading] = React.useState(false)

  const balances = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .required('Ethereum address required')
        .test('invalid-address', 'Please provide a valid Ethereum address', (val) =>
          /^(0x)?[0-9a-fA-F]{40}$/.test(val),
        ),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const tokenBalances: TokenBalance[] = await getTokenBalance(values.address)
      if (
        +tokenBalances[0].balance === 0 &&
        +tokenBalances[0].balance === 0 &&
        +tokenBalances[0].balance === 0
      ) {
        balances.setErrors({
          address: 'At least one balance needs to be greater than zero',
        })
      } else {
        setSubmitted(true)
        setTokenBalances(tokenBalances)
      }
      setLoading(false)
    },
  })

  return (
    <div>
      <Head>
        <title>Oazo Apps Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <TokenCard submitted={submitted} tokenBalances={tokenBalances} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <FormCard
                address={balances.values.address}
                onSubmit={balances.handleSubmit}
                onChange={balances.handleChange}
                isValid={balances.isValid}
                errorText={balances.errors?.address ?? ''}
                submitted={submitted}
              />
            </Grid>
          </Grid>
        )}
      </Layout>
    </div>
  )
}

export default Home
