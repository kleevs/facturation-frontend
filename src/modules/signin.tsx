import SigninComponent from 'src/components/signin';
import SigninContainer from 'src/containers/signin';
import { preventDefault } from 'src/tools/mixin';
import { Ajax } from 'src/tools/ajax';
import { SigninService } from 'src/app/service/signin-service';
import { success, error } from 'src/tools/notify';
import { SigninAction } from 'src/app/action/signin';

export default function SigninModule({ isConnected }: { 
    isConnected: () => void;
}) {
    const ajaxTool = new Ajax();
    const signinEngine = new SigninService(ajaxTool);
    const action = new SigninAction(signinEngine, { success, error });
    const Content = SigninComponent({ preventDefault, signin: (l, p) => (action.signin(l, p).then(isConnected), false) });
    const Result = SigninContainer({Content});
    return <Result />
}