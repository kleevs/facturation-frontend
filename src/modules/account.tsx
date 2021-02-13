import AccountComponent from 'src/components/account';
import { Ajax } from 'src/tools/ajax';
import { AccountService } from 'src/app/service/account-service';
import { AccountAction } from 'src/app/action/account';
import { success, error } from 'src/tools/notify';
import { useState } from 'react';

const ajaxTool = new Ajax();
const accountEngine = new AccountService(ajaxTool);
const action = new AccountAction(accountEngine, { success, error });
const save = (account) => (action.save(account), false);

export default function AccountModule({initialValue}: {
    initialValue: App.Account
}) {
    const [state, setState] = useState(initialValue);
    return <AccountComponent value={state} onChange={setState} save={save} />
}