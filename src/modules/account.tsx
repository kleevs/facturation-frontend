import AccountComponent from 'src/components/account';
import AccountContainer from 'src/containers/account';
import { preventDefault } from 'src/tools/mixin';
import { Ajax } from 'src/tools/ajax';
import { AccountService } from 'src/app/service/account-service';
import Layout from 'src/components/layout';
import { AccountAction } from 'src/app/action/account';
import { success, error } from 'src/tools/notify';

export default function AccountModule({initialValue}: {
    initialValue: App.Account
}) {
    const ajaxTool = new Ajax();
    const accountEngine = new AccountService(ajaxTool);
    const action = new AccountAction(accountEngine, { success, error });
    const Content = AccountComponent({ preventDefault, save: (account) => (action.save(account), false) });
    const Result = AccountContainer({Content});
    return <Layout><Result initialValue={initialValue} /></Layout>
}