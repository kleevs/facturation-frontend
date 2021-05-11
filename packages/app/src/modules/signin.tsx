import { Ajax } from 'src/tools/ajax';
import { SigninService } from 'src/service/signin-service';
import { success, error } from 'src/tools/notify';
import { SigninAction } from 'src/action/signin';
import { useState } from 'react';
import SigninComponent from 'src/components/signin';

const ajaxTool = new Ajax();
const signinEngine = new SigninService(ajaxTool);
const action = new SigninAction(signinEngine, { success, error });
const signin = (isConnected: ()=>void) => (l, p) => (action.signin(l, p).then(isConnected), false);

export default function SigninModule({ isConnected }: { 
    isConnected: () => void;
}) {
    const [state, setState] = useState({ login: '', password: ''});
    return <SigninComponent value={state} onChange={setState} signin={signin(isConnected)} />
}