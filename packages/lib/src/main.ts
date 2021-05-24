import toastr from 'toastr'
import { createPortal } from 'react-dom'
import axios from 'axios';
import notifyErrorFactory from './notify/error'
import notifySuccessFactory from './notify/success'
import TextfieldFactory from './ui/textfield'
import NumberfieldFactory from './ui/numberfield'
import DropdownFactory from './ui/dropdown'
import DatefieldFactory from './ui/datefield'
import TextareaFactory from './ui/textarea'
import ModalFactory from './ui/modal'
import CardFactory from './ui/card'
import { parseDate, dateToString, formatDate } from './tool/date'
import getFactory from './ajax/get'
export { post } from './ajax/post'
export { put } from './ajax/put'
export { remove } from './ajax/remove'
export { preventDefault } from './tool/prevent-default'
export { parseDate, dateToString, formatDate }

export const get = getFactory({ axios })
export const notifyError = notifyErrorFactory({ toastr })
export const notifySuccess = notifySuccessFactory({ toastr })
export const Textfield = TextfieldFactory()
export const Numberfield = NumberfieldFactory()
export const Dropdown = DropdownFactory()
export const Datefield = DatefieldFactory({ parseDate, dateToString })
export const Textarea = TextareaFactory()
export const Modal = ModalFactory({ createPortal, modalContainer: () => document.body })
export const Card = CardFactory({ dateToString })

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