import { loadByUserId } from 'src/db';

export default function handler(req, res) {
  const userId = 1;
  const client = loadByUserId(userId)
  const factures = client.map(_ => _.facture)
  res.status(200).json(factures);
}