import * as React from 'react';
import { Login as App } from '../app/page/login';
import { useObserver } from '../tool/react.extend';
import { preventDefault } from '../tool/mixin';

export default function (props: { app: App }) {
    var login = useObserver(props.app);

    return <div>
    <h1 className="title">Connexion</h1> 
    <hr/>
    <div className="container">
        <form className="full-width center" onSubmit={(e) => preventDefault(e, () => login.signin())}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Login</span>
                </div>
                <input data-id="login"  value={login.email} onChange={(e) => login.email = e.target.value} name="login" type="text" className="form-control" placeholder="Login" aria-label="Login" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                </div>
                <input data-id="password"  value={login.password} onChange={(e) => login.password = e.target.value} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            </div>

            <button type="submit" className="btn btn-primary full-width attention-hover" data-content="Se connecter">Sign in</button>
        </form>
    </div>
</div>
}