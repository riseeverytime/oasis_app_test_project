export type Balance = {
  address: string
  balances: {
    token: string
    balance: number
  }[]
}

export type TokenBalance = {
  token: string
  balance: string
}
