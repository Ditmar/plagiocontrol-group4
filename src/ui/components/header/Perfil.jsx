import {react} from 'react';
export const Perfil = ({ Usuario }) => {
    return(
        <div>
            <p className="name">{Usuario.Perfil}</p>
            <img className="photo" src={ Usuario.Avatar }/>
        </div>
    );
}