import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import '../../../../context/Review/review.css'

import { ImageConfig } from './config/imageConfig';


import { FaTrash } from 'react-icons/fa'

const DropFileInput = ({ isUploadedfile, props }) => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

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

    return (

        <div
            className='dropfilesinput'
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            {isUploadedfile ? (<div className='dropfilespreview__item'>
                <div className="dropfilespreview__item__info">
                    <div className="dropfilepreview__image">
                    <img src="/pdf.png" alt="" />
                    </div>
                    <p className='fileName'>NOCHE DE TALENTOS  PROGRAMA  MAYO 2022.pdf </p>
                    <br />
                    <p className='fileSize'> 0.92MB</p>
                    <div className="dropfilespreview__item__del">
                        <FaTrash
                        />
                    </div>
                </div>
            </div>) : (<input
                type="file"
                onChange={onFileDrop}
            />)}

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

    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func,
    isUploadedfile: PropTypes.bool
}

export default DropFileInput;