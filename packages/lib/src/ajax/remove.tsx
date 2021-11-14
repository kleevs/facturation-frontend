import axios from 'axios';

export async function remove<T>(uri: string): Promise<T> {
    try {
        const response = await axios.delete(uri);
        return response.data;
    } catch (e) {
        throw e?.response?.data;
    }
}