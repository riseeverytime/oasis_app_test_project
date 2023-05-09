import axios from 'axios'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

const DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
const USDC_ADDRESS = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
const MKR_ADDRESS = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
const PROVIDER_URL = 'https://mainnet.infura.io/v3/dc8daf9e2f2542be95659ca1369c6083'

// The minimum ABI to get ERC20 Token balance
const minABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function',
  },
]

export const web3 = new Web3(PROVIDER_URL)

const daiContract = new web3.eth.Contract(minABI as unknown as AbiItem, DAI_ADDRESS)
const usdcContract = new web3.eth.Contract(minABI as unknown as AbiItem, USDC_ADDRESS)
const mkrContract = new web3.eth.Contract(minABI as unknown as AbiItem, MKR_ADDRESS)

export const getTokenBalance = async (address: string) => {
  try {
    const daiBalance = await daiContract.methods.balanceOf(address).call()
    const daiDecimal = await daiContract.methods.decimals().call()

    const usdcBalance = await usdcContract.methods.balanceOf(address).call()
    const usdcDecimal = await usdcContract.methods.decimals().call()

    const mkrBalance = await mkrContract.methods.balanceOf(address).call()
    const mkrDecimal = await mkrContract.methods.decimals().call()

    const balances = [
      { token: 'DAI', balance: (daiBalance / Math.pow(10, daiDecimal)).toFixed(2) },
      { token: 'USDC', balance: (usdcBalance / Math.pow(10, usdcDecimal)).toFixed(2) },
      { token: 'MKR', balance: (mkrBalance / Math.pow(10, mkrDecimal)).toFixed(2) },
    ]
    await axios.post('/api/balances', {
      address,
      balances,
    })

    return balances
  } catch (e: any) {
    throw new Error(e?.message)
  }
}
