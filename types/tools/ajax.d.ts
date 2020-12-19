declare namespace Tools {
    export interface Ajax {
        get<T>(uri: string): Promise<T>;
        put<T, P>(uri: string, data: T): Promise<P>;
        post<T, P>(uri: string, data: T): Promise<P>;
        remove<T>(uri: string): Promise<T>;
        ajax<T>(url: string, options: {
            method: string;
            headers?: {[s: string]: string},
            data?: any;
          }): Promise<T>;

        ajaxFormData<T>(url: string, options: {
            method: string;
            headers?: {[s: string]: string},
            data?: {[key: string]: any;};
        }): Promise<T>;
    }
}