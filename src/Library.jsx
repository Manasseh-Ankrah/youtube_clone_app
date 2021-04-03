import React,{useState,useEffect} from 'react';
import './Library.css';
// import HistoryIcon from '@material-ui/icons/History';
// import Loader from 'react-loader-spinner';
import Lib_History from './Lib_History';
import Lib_Watch from './Lib_Watch';


function Library() {
    return (
        <div className="library">
            <Lib_History />
            <Lib_Watch />
        </div>

        
    )
}

export default Library;
