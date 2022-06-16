import React, {Fragment, FC, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navigation/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Upload from "./components/pages/upload/Upload";
import VisualProjection from "./components/pages/visualProjection/VisualProjection";
import {IFiles} from "./interface/Interface";
import './App.css';

const App: FC<IFiles> = () => {
    const [files, setFiles] = useState<any>([{
        selected: false,
        name: "MyFIle.json"
    }, {
        selected: false,
        name: "MyFIle2.json"
    }, {
        selected: false,
        name: "MyFIle3.json"
    }]);

    const removeFile: remove = filenames => {
        if (typeof filenames === "string") setFiles(files.filter((file: any) => file.name !== filenames));
        if (Array.isArray(filenames)) {
            setFiles(files.filter((file: any) => !file.selected))
        }
    }

    return (
        <Fragment>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/upload"
                           element={<Upload files={files} setFiles={setFiles}/>}/>
                    <Route path="/visualProjection"
                           element={<VisualProjection files={files} removeFile={removeFile} setFiles={setFiles}/>}/>
                </Routes>
            </Router>

        </Fragment>
    );
}

export default App;
