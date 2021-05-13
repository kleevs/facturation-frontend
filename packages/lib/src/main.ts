import toastr from 'toastr';
import notifyErrorFactory from './notify/error'
import notifySuccessFactory from './notify/success'
import TextfieldFactory from './ui/textfield'
import NumberfieldFactory from './ui/numberfield'
import DropdownFactory from './ui/dropdown'
import DatefieldFactory from './ui/datefield'

export { get } from './ajax/get'
export { post } from './ajax/post'
export { put } from './ajax/put'
export { remove } from './ajax/remove'
export { preventDefault } from './tool/prevent-default'

export const notifyError = notifyErrorFactory({ toastr })
export const notifySuccess = notifySuccessFactory({ toastr })
export const Textfield = TextfieldFactory()
export const Numberfield = NumberfieldFactory()
export const Dropdown = DropdownFactory()
export const Datefield = DatefieldFactory()

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