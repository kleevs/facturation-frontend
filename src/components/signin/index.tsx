import React, { ComponentType } from 'react';

export default function SigninComponentFactory({ preventDefault, signin }: {
    preventDefault: Tools.Mixin.preventDefault;
    signin: App.Signin.signin;
}): ComponentType<Components.Signin.Props> { 
    return function SigninComponent({ value, onChange }) {
        return <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form className="user" onSubmit={(e) => preventDefault(e, () => signin(value?.login, value?.password))}>
                            <div className="form-group">
                            <input type="email" value={value?.login} onChange={(e) => onChange({ ...value, login: e.target.value })} className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                            </div>
                            <div className="form-group">
                            <input type="password" value={value?.password} onChange={(e) => onChange({ ...value, password: e.target.value })} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-user btn-block">
                            Login
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    }
}