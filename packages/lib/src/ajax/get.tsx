import axios from 'axios';

export function get<T>(uri: string): Promise<T> {
    return axios.get(uri)
    .catch(e => { throw e?.response?.data; })
    .then(_ => _.data);
}