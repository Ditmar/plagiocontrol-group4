import {react} from 'react';
export const Perfil = ({ User }) => {
    return(
        <div>
            <p className="name">{User.profile}</p>
            <img className="photo" src={ User.Avatar }/>
        </div>
    );
}