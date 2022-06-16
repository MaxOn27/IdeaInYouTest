import React, {FC, Fragment, useState} from 'react';
import {createPortal} from 'react-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import {IFiles} from "../../../../interface/Interface";
import VisualProjection from "../VisualProjection";
import "../../Pages.css";
import {Rnd} from 'react-rnd';

const portalDiv = document.getElementById('portal')!;

const Modal: FC<IFiles> = ({files, open, close, removeFile, removeSelectedFiles}) => {

    if (!open) return null;

    return createPortal(
        <Fragment>
            <div className="modal-overlay" onClick={close}/>
            <Rnd className="modal-wrapper" default={{
                x: 260,
                y: -850,
                width: 1200,
                height: 700,
            }}>
                <div className="btn-wrapper">
                    <button className="modal-close-btn" onClick={close}><AiIcons.AiOutlineClose/></button>
                    <button className="modal-delete-btn" onClick={removeSelectedFiles}><FaIcons.FaTrashAlt/>
                    </button>
                </div>
                <VisualProjection files={files} removeFile={removeFile} open/>
            </Rnd>
        </Fragment>,
        portalDiv
    );
};

export default Modal;