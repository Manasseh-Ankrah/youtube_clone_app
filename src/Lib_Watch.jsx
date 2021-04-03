import React,{useState,useEffect} from 'react';
import './Lib_Watch.css';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import Loader from 'react-loader-spinner';
import MyAccount from './MyAccount';

//  const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=${Results}`;

function Lib_Watch() {
    const Api_key = "AIzaSyBlS38y4IWzlRrR9aPONH3TKovlA6Y3CEE";
    const ChannelId = "UCqeTj_QAnNlmt7FwzNwHZnA";
    const Results = 6;
    const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=${Results}`;
 
   const [data,setData] = useState([]);
   const [errorMsg,setErrorMsg] = useState(false);

   useEffect(()=> {
    const fetch_Lib_Watch = async() => {
        const Data = await fetch(Fetch_url);
        const response = await Data.json();
        const recieve = response.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        setErrorMsg(true);
        setData(recieve);  
    }
    fetch_Lib_Watch();
  },[])

   if(errorMsg === false) {
       return(
           <div className="errorMsg_lib">
               <Loader type="TailSpin" color="red" height={80} width={80} />
           </div>
       )
   }

    return (
        <div className="lib">
            <div className="lib__description"> 
                <div  className="lib__icon">
                   <WatchLaterIcon className="watch_icon"/> 
                   <h2>Watch Later</h2>
                   <p>50</p>
                </div>
                   <h3 className="see_all">SEE ALL</h3>
            </div>
            
            <div className="lib__section ">
                <div className="lib__videos  ">
                     {data.map(vids => {
                return(                                   
                        <iframe className="lib__iframe" src={vids} title="Lib_Watch Page"  frameBorder="0" allowFullScreen>
                         </iframe>                                 
                )
             })}
                </div>
             </div>          
        </div>

        
    )
}

export default Lib_Watch;
