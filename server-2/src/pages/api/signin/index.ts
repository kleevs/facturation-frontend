import { signin } from 'src/db/user';

export default function handler(req, res) {
  const login = '';
  const password = '';
  const user = signin(login, password)
  res.status(200).json(user);
}