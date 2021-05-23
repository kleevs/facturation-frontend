import type toastr from 'toastr';

type Deps = {
    toastr: typeof toastr 
}

export default ({toastr}: Deps) => 
function error(title: string, message: string) {
    toastr.error(message, title);
}