import { put, notifySuccess as success, notifyError as error, preventDefault } from 'lib';
import saveServiceFactory from './service/save';
import saveFactory from './action/save';
import settingComponentFactory from './component/setting';
var saveService = saveServiceFactory({ put: put });
var save = saveFactory({ saveService: saveService, success: success, error: error });
export var settingComponent = settingComponentFactory({ preventDefault: preventDefault, save: save });
