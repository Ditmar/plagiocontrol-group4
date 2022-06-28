import React from 'react';
export const Login = () => {
    return (
        <div className="containerPrincipal">
            <div className="containerSecundario">
                <div className="containerTercero"><br/><br/><br/>
                    <div className="form-group">
                        <div className="containerT1">
                            <label className="containerD"></label>
                        </div>
                        <br/>
                        <label className="Plagio">Plagio Control</label>
                        <br/><br/>
                        <label className="LPlagioControl">Login Plagio Control</label><br/><br/>
                        <label className="Enter">Enter your email and password below</label><br/><br/>
                        <label className="Email">
                            EMAIL
                        </label>
                        <br/>
                        <input
                            type="txt"
                            className="form-control1"
                            placeholder="Email addres"

                        />
                        <br/>
                        <label className="Password">
                            PASSWORD
                        </label>
                        <label >
                           <a className="Forgot"> Forgot password?</a>
                        </label>
                        <br/>
                        <input
                            type="password"
                            className="form-control2"
                            placeholder="Password"
                        />
                        <br/>
                        <button className="btn btn-primary">Log In</button>
                        <br/><br/>
                        <label className="Cuenta">No tienes una cuenta? <a className="Crea">Sing up </a></label>

                    </div>
                </div>
            </div>

        </div>
    )
}