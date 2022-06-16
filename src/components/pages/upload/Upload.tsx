import React, {FC, Fragment} from 'react';
import axios from "axios";
import * as AiIcons from "react-icons/ai";

import {IFiles} from "../../../interface/Interface";
import '../Pages.css';

const Upload: FC<IFiles> = ({files, setFiles, removeFile}) => {
    const uploadHandler = (event: any) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = false;
        setFiles([...files, file])

        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                file.selected = false;
                setFiles([...files, file]);
            })
            .catch((err) => {
                console.error(err);
                removeFile(file.name);
            });
    }

    return (
        <Fragment>
            <div className="upload-wrapper">
                <div className="file-card">
                    <form className="file-inputs">
                        <input type="file"  className="file-uploader" onChange={uploadHandler} accept=".json"/>
                        <button className="file-upload-button">
                            <AiIcons.AiOutlinePlus className="file-icon"/>
                            Upload
                        </button>
                    </form>
                    <p className="info">Supports only <strong>.json</strong> files</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Upload;