import * as $ from 'jquery';
import { parseDate } from './date';

function JSONParse(arg) {
    return JSON.parse(arg, (key, value) => parseDate(value));
}

export let apiDomain = "http://fla-virtualbox:8080";
export function ajax<T>(url: string, options: {
    method: string;
    headers?: {[s: string]: string},
    data?: any;
}) {
    return new Promise<{ result: T, status: string }>((resolve, reject) => {
        $.ajax({
            method: options.method,
            url: `${apiDomain}${url}`,
            data: JSON.stringify(options.data),
            dataType: 'json',
            contentType: 'application/json',
            xhrFields: {
                withCredentials: true
            },
            converters: {
                "text json": JSONParse
            },
            crossDomain: true,
            success: (data, textStatus, xhr) => {
                resolve({ result: data, status: xhr.status });
            }, 
            error: (xhr, textStatus) => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ result: undefined, status: xhr.status });
                } else {
                    reject({ result: xhr.responseText, status: xhr.status });
                }
            }, 
          });
    });
}

export function ajaxFormData<T>(url: string, options: {
    method: string;
    headers?: {[s: string]: string},
    data?: {[key: string]: any;};
}) {
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

    return new Promise<{ result: T, status: string }>((resolve, reject) => $.ajax({
        method: options.method,
        url: `${apiDomain}${url}`,
        data: data,
        dataType: 'json',
        contentType: false,
        processData: false,
        xhrFields: {
            withCredentials: true
        },
        converters: {
            "text json": JSONParse
        },
        crossDomain: true,
        success: (data, textStatus, xhr) => {
            resolve({ result: data, status: xhr.status });
        }, 
        error: (xhr, textStatus) => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve({ result: undefined, status: xhr.status });
            } else {
                reject({ result: xhr.responseText, status: xhr.status });
            }
        }, 
      }));
}
