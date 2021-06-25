import axios from 'axios';

export function get<T>(uri: string): Promise<T> {
    return axios.get(uri)
    .catch(e => { throw { data: e?.response?.data, status: e?.response?.status }; })
    .then(_ => _.data);
}