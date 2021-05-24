import { 
    post, put, get, remove as removeAjax, notifySuccess as success, notifyError as error,
    Textfield, Dropdown, Numberfield, Textarea, preventDefault, Modal, Card
} from 'lib'
import createPaiementServiceFatory from './service/create-paiement'
import removePaiementServiceFatory from './service/remove-paiement'
import createPieceJointeServiceFatory from './service/create-piecejointe'
import removePieceJointeServiceFatory from './service/remove-piecejointe'
import loadServiceFatory from './service/load'
import saveServiceFatory from './service/save'
import removeServiceFatory from './service/remove'
import createPaiementFatory from './action/create-paiement'
import saveFatory from './action/save'
import removeFatory from './action/remove'
import removePaiementFatory from './action/remove-paiement'
import createPieceJointeFatory from './action/create-piecejointe'
import removePieceJointeFatory from './action/remove-piecejointe'
import factureComponentFactory from './component/facture'
import facturesComponentFactory from './component/factures'
import serviceComponentFactory from './component/service'

const loadService =  loadServiceFatory({ get })
const saveService = saveServiceFatory({ put, post })
const removeService = removeServiceFatory({ removeAjax })
const createPaiementService = createPaiementServiceFatory({ post })
const createPieceJointeService = createPieceJointeServiceFatory({ post })
const removePaiementService = removePaiementServiceFatory({ remove: removeAjax })
const removePieceJointeService = removePieceJointeServiceFatory({ remove: removeAjax })

export const save = saveFatory({ saveService, loadService, success, error })
export const remove = removeFatory({ removeService, success, error })
export const createPaiement = createPaiementFatory({ createPaiementService, loadService, success, error })
export const removePaiement = removePaiementFatory({ removePaiementService, loadService, success, error })
export const createPieceJointe = createPieceJointeFatory({ createPieceJointeService, loadService, success, error })
export const removePieceJointe = removePieceJointeFatory({ removePieceJointeService, loadService, success, error })
export const Service = serviceComponentFactory({ Numberfield, Textarea, preventDefault })
export const FactureComponent = factureComponentFactory({ Textfield, Service, Dropdown, preventDefault, save, Modal })
export const FacturesComponent = facturesComponentFactory({ Card })