import type { NextApiRequest, NextApiResponse } from 'next'
import { balances } from '../../balances'
import { Balance } from '../../type'

export default function handler(req: NextApiRequest, res: NextApiResponse<Balance[]>) {
  const { method } = req

  switch (method) {
    case 'GET':
      res.status(200).json(balances)
      break
    case 'POST':
      balances.push(req.body)
      res.status(200).json(balances)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
      break
  }
}
