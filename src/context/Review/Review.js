import React from "react";
import DropFileInput from '../../ui/components/review/drop_files_input/DropFileInput';
import './review.css'

export const Review = () => {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div >
        Review Page
        <div className="boxtext">
    <div className="text">
        <p >Suba el documento pdf del trabajo que desea revisar, el sistema verifica similaridad de los documentos contenidos en la base de datos, ya depende del tutor tomar decisiones sobre dicho trabajo</p>
        </div>
    </div>
        <DropFileInput
            onFileChange={(files) => onFileChange(files)}
        />
    </div>
    )
}
