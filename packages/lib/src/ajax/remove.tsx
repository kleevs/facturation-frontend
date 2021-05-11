import axios from 'axios';

export function remove<T>(uri: string): Promise<T> {
    return axios.delete(uri)
    .catch(e => { throw e?.response?.data; })
    .then(_ => _.data);
}