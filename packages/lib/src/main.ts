import * as toastr from 'toastr';
import notifyErrorFactory from './notify/error'
import notifySuccessFactory from './notify/success'

export { get } from './ajax/get'
export { post } from './ajax/post'
export { put } from './ajax/put'
export { remove } from './ajax/remove'

export const notifyError = notifyErrorFactory({ toastr })
export const notifySuccess = notifySuccessFactory({ toastr })

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}