import axios from 'axios';

export async function post<T, TData>(uri: string, data: TData): Promise<T> {
    try {
        const response = await axios.post(uri, data);
        return response.data;
    } catch (e) {
        throw e?.response?.data;
    }
}