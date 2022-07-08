import React from 'react';
import PropTypes from 'prop-types';
import '../header/header.css';
import { Perfil } from './SubComponents/Perfil';
import { Search } from './SubComponents/Search';
import { Title} from './SubComponents/Title';
import { Notifications } from './SubComponents/Notifications';
export const Head = () => {
    const User= {
        Title: 'Overview',
        profile:'Jones Ferdinand',
        Avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/CARLOS-WARD-PERFIL.png',
    };
    return (
        <div className="header">
            <Title User={User}/>
            <Search/>
            <Notifications/>
            <Perfil User={User}/>
        </div>
    );
}

Head.propTypes = {
    file: PropTypes.bool
}

export default Head;