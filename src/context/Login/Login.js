import React from 'react';
export const Login = () => {
    return (
        <div className="containerPrincipal">
            {isLoading?(<div>Loading</div>):
            (<form onSubmit={onSubmit} >
                <div className="containerSecundario">
                    <div className="containerT1">
                        <div className="containerD"></div>
                    </div>
                    <label className="plagiarism">Plagio Control</label>
                    <label className="containerTitle">Login Plagio Control</label>
                    <label className="Enter">Enter your email and password</label>
                    <label className="Email">EMAIL</label>
                    <div className="">
                        <input
                            type="text"
                            name="email"
                        
                            placeholder="Email addres"
                            className={errors?"inputErrors":"form-control1"}
                            onChange={handlerChangeForm}                            
                        ></input>                    
                    </div>
                    <label className="Password">PASSWORD</label>
                    <label className="Forgot"><a>Forgot password?</a></label>
                    <div className="">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={errors?"inputErrors":"form-control2"}
                            
                        />
                       
                    </div>
                    
                    <input className="btn btn-primary" type="submit" value={label} onClick="onSubmit" ></input>
                    <label className="Bill">No tienes una cuentas?</label>
                    <label className="creates"><a>Sign up</a></label>
                    
                </div>
            </form> )}
            
        </div>
    )
}