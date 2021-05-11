import axios from 'axios';

export function put<T, TData>(uri: string, data: TData): Promise<T> {
    return axios.put(uri)
    .catch(e => { throw e?.response?.data; })
    .then(_ => _.data);
}