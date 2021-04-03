import React,{useState} from 'react';
import './WatchLater.css';
import Loader from 'react-loader-spinner';

function WatchLater() {
        const [errorMsg,setErrorMsg] = useState(false);

    if(errorMsg === false) {
        return(
            <div className="errorMsg">
                <Loader type="TailSpin" color="red" height={80} width={80} />
            </div>
        )
    }
    return (
        <div className="watchLater">
            <h2>Watch Later</h2>
            
        </div>
    )
}

export default WatchLater
