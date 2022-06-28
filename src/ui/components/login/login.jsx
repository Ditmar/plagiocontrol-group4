import { React } from "react";
import PropTypes from 'prop-types';
import '../../../App.css';
import useForm from "../../../hooks/useForm";
export const Login = ({isLoading, errors, label}) => {
    const [ handlerChangeForm] = useForm({username:"" , password: ""});
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="containerPrincipal">
            <div className="containerSecundario">
                {isLoading? (<div>Loading...</div>):(<form onSubmit={onSubmit}>
                    <div>
                        <div className="containerT1">
                                <label className="containerD"></label>
                        </div>
                        <br/>
                        <label className="Plagio">Plagio Control</label>
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

                        /><br/><br/>
                        
                        <label className="Password">
                            PASSWORD
                        </label>
                        <label >
                           <a className="Forgot"> Forgot password?</a>
                        </label>
                        <br/>
                        <div className="">
                        <input
                            type="password"
                            className="form-control2"
                            placeholder="Password"
                        /></div><br/><br/>
                        
                        <br/>
                        <button 
                        className="btn btn-primary"
                        type="submit" 
                        value={label}
                        >Log In</button>
                        <br/><br/>
                        <label className="Cuenta">No tienes una cuenta? <a className="Crea">Sing up </a></label>
                        
                        
                    </div>
                </form>)}
                
            </div>
        </div>
    );
}

Login.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     isLoading: PropTypes.bool,
     errors: PropTypes.bool,
     label: PropTypes.string
  };