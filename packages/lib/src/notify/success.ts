import type * as toastr from 'toastr';

type Deps = {
    toastr: typeof toastr 
}

export default ({toastr}: Deps) => {
    function success(title: string)
    function success(title: string, message: string);
    function success(title: string, message?: string) {
        toastr.success(message || '', title);
    }

    return success;
}
