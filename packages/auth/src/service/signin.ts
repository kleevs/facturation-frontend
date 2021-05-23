import type { post } from 'lib'

type Deps = {
  post: typeof post;
}

export default ({post}: Deps) => 
function signin(login: string, password: string): Promise<void> {
  return post('/api/accounts/login', { login, password });
}