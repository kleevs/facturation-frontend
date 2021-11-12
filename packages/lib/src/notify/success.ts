import toastr from 'toastr';

export default function success(title: string);
export default function success(title: string, message: string);
export default function success(title: string, message?: string) {
    toastr.success(message || '', title);
}