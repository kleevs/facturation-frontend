import axios from 'axios';

export async function put<T, TData>(uri: string, data: TData): Promise<T> {
    try {
        const response = await axios.put(uri, data);
        return response.data;
    } catch (e) {
        throw e?.response?.data;
    }
}