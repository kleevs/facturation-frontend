import toastr from 'toastr'
import notifyError from './notify/error'
import notifySuccess from './notify/success'
import Textfield from './ui/textfield'
import Numberfield from './ui/numberfield'
import Dropdown from './ui/dropdown'
import Datefield from './ui/datefield'
import Textarea from './ui/textarea'
import Modal from './ui/modal'
import Card from './ui/card'
import { parseDate, dateToString, formatDate } from './tool/date'
export { get } from './ajax/get'
export { post } from './ajax/post'
export { put } from './ajax/put'
export { remove } from './ajax/remove'
export { preventDefault } from './tool/prevent-default'
export { parseDate, dateToString, formatDate }

export {
    notifyError,
    notifySuccess,
    Textfield,
    Numberfield,
    Dropdown,
    Datefield,
    Textarea,
    Modal,
    Card
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}