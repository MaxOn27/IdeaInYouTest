import React, {FC, useState, Fragment} from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

import {IFiles} from "../../../../interface/Interface";
import Modal from "../Modal/Modal";

const FileItem: FC<IFiles> = ({files, file, deleteFile, removeFile, open, removeSelectedFiles}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event: any) => {
      if (event.target.checked) {
          console.log(file);
          file.selected = true
      }
      file.select = false;
    }

    return (
        <Fragment>
            <li className={open ? "list-item draggable-list-item" : "list-item"} key={file.name}>
                {!file.isUploading && open && <input
                    type="checkbox" className="file-checkbox" onChange={handleChange}/>}
                <AiIcons.AiOutlineFileDone className='icons'/>
                <p className="file-name">{file.name}</p>
                <div className="actions">
                    {
                        file.isUploading && <FaIcons.FaSpinner
                            className="fa-spin icons"/>
                    }
                    {
                        !file.isUploading && open && <FaIcons.FaTrashAlt
                            className="icons" onClick={() => {deleteFile(file.name)}}/>
                    }
                </div>
                {
                    !open && <button onClick={() => setIsOpen(true)} className="open-modal-btn">
                        <MdIcons.MdOpenInNew/>
                    </button>
                }
            </li>
            <Modal open={isOpen} close={() => setIsOpen(false)}  files={files} removeSelectedFiles={removeSelectedFiles} removeFile={removeFile}/>
        </Fragment>
    );
};

export default FileItem;