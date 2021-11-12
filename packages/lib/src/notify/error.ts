import toastr from 'toastr';

export default function error(title: string, message: string) {
    toastr.error(message, title);
}