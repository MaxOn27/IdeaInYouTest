import React, {Fragment, FC, useState} from 'react';
import axios from "axios";

import {IFiles} from "../../../interface/Interface";
import FileItem from "./FileItem/FileItem";

const VisualProjection: FC<IFiles> = ({files, removeFile, open}) => {

    const deleteFileHandler = (_name: any) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }

    const deleteSelectedFiles = () => {
        const selectedFiles: any = [];
        files.forEach((file: any) => {
            if (file.selected) {
                selectedFiles.push(file.name)
            }
        });
        axios.delete(`http://localhost:8080/upload?name=${selectedFiles}`)
            .then(res => {
                removeFile(selectedFiles)
            })
            .catch(err => {
                console.error(err)
            })
    };

    return (
        <Fragment>
            <ul className="file-list">
                {
                    files && files.map((file: any) =>
                        <FileItem
                            key={file.name}
                            file={file}
                            deleteFile={deleteFileHandler}
                            removeSelectedFiles={deleteSelectedFiles}
                            files={files} removeFile={removeFile} open={open}/>
                    )
                }
            </ul>
        </Fragment>
    );
};


export default VisualProjection;