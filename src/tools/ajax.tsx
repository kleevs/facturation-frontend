import axios from 'axios';

export class Ajax implements Tools.Ajax {
    ajax<T>(url: string, options: { method: 'POST' | 'GET' | 'PUT' | 'DELETE'; headers?: { [s: string]: string; }; data?: any; }): Promise<T> {
        return axios.request({
            url: url,
            method: options.method,
            headers: options.headers,
            data: options.data
        })
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
    ajaxFormData<T>(url: string, options: { method: 'POST' | 'GET' | 'PUT' | 'DELETE'; headers?: { [s: string]: string; }; data?: { [key: string]: any; }; }): Promise<T> {
        var data = new FormData();
        if (options && options.data) {
            for (var key in options.data) {
                if (options.data[key] instanceof Array) {
                    options.data[key].forEach(_ => {
                        data.append(key, _); 
                    });
                } else {
                    data.append(key, options.data[key]); 
                }
            }
        }

        return axios.request({
            url: url,
            method: options.method,
            headers: options.headers,
            data: data
        })
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
    get<T>(uri: string): Promise<T> {
        return axios.get(uri)
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
    put<T, P>(uri: string, data: T): Promise<P> {
        return axios.put(uri, data)
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
    post<T, P>(uri: string, data: T): Promise<P> {
        return axios.post(uri, data)
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
    remove<T>(uri: string): Promise<T> {
        return axios.delete(uri)
        .catch(e => { throw e?.response?.data; })
        .then(_ => _.data);
    }
}