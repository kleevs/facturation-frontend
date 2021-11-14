import axios from 'axios';

export async function get<T>(uri: string): Promise<T> {
    try {
        const response = await axios.get(uri);
        return response.data;
    } catch (e) {
        throw { data: e?.response?.data, status: e?.response?.status };
    }
}