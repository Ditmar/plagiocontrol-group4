import {react} from 'react';

export const Perfil = ({ User }) => {
    return(
        <div>
            <p className="nameUser">{User.profile}</p>
            <img className="photo" src={ User.Avatar }/>
        </div>
    );
}