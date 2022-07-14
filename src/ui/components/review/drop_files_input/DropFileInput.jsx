import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../../../../context/Review/review.css'

import { ImageConfig } from './config/imageConfig';


import { FaTrash } from 'react-icons/fa'


const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    const criptFile = (file) => {

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var base64 = reader.result;
            console.log(base64.split(','));
        }

    }
    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {

            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }
    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const fileSend = async () => {
        const formData = new FormData();
        for (let i = 0; i < fileList.length; i++) {
            formData.append('', criptFile(fileList[i]));

        }
        await fetch('http://localhost:8000/server/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .catch(error => console.error('Error', error))
            .then(response => console.log('Success', response))
    }


    return (
        <div>
            <div
                className='dropfilesinput'
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <input
                    type="file"
                    name="files"
                    onChange={onFileDrop}
                />

                {
                    fileList.length > 0 ? (


                        <div className="dropfilespreview">
                            {
                                fileList.map((item, index) => (

                                    <div key={index} className="dropfilespreview__item">

                                        <div className="dropfilespreview__item__info">
                                            <div className="dropfilepreview__image">
                                                <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['pdf']} alt="" />
                                            </div>

                                            <p className='fileName'>{item.name} </p>
                                            <br />
                                            <p className='fileSize'>{(item.size / 1000000).toFixed(2)}MB</p>



                                            <div className="dropfilespreview__item__del">
                                                <FaTrash onClick={() => fileRemove(item)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
            </div>
            <button className='buttonSendFiles' onClick={() => fileSend()}>Enviar</button>
        </div>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func,

}

export default DropFileInput;
