import {react} from 'react';
export const Title = ({ User }) =>{
    return(
        <div>
            <p className="title">{User.Title}</p>
        </div>
    );
}