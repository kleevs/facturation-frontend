import axios from 'axios';

export function post<T, TData>(uri: string, data: TData): Promise<T> {
    return axios.post(uri)
    .catch(e => { throw e?.response?.data; })
    .then(_ => _.data);
}