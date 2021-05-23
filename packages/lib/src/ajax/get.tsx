import type axios from 'axios';

type Deps = {
    axios: typeof axios;
}

export default ({axios}: Deps) => 
function get<T>(uri: string): Promise<T> {
    return axios.get(uri)
    .catch(e => { throw e?.response?.data; })
    .then(_ => _.data);
}