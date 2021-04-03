import React,{useState,useEffect} from 'react';
import './YourVideos.css';
import Loader from 'react-loader-spinner';
import Avatar from '@material-ui/core/Avatar';



//     const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=${Results}`;

function YourVideos() {
    const Api_key = "AIzaSyBlS38y4IWzlRrR9aPONH3TKovlA6Y3CEE";
    const ChannelId = "UCqeTj_QAnNlmt7FwzNwHZnA";
    const Results = 6;
    const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=${Results}`;
 
   const [data,setData] = useState([]);
   const [errorMsg,setErrorMsg] = useState(false);
   const [image,setImage] = useState("");
   const [title,setTitle] = useState("🔴 NETFLIX REACT.JS Challenge | Day 3 (Authentication &amp; Plans/Profile Screen)");

   useEffect(()=> {
    const fetch_Info = async() => {
        const Data = await fetch(Fetch_url);
        const response = await Data.json();
        const recieve = response.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        const title = response.items.map( title => title.snippet.channelTitle);
        const image = response.items.map( title => title.snippet.thumbnails.medium.url);

        setErrorMsg(true);
        setData(recieve); 
        setImage(image);  
    }
    fetch_Info();
  },[])

   if(errorMsg === false) {
       return(
           <div className="errorMsg">
               <Loader type="TailSpin" color="red" height={80} width={80} />
           </div>
       )
   }

    return (
        <div className="yourVideos">
            <h2>Recommended</h2>
            <div className="yourVideos__videos">
            {data.map(vids => {
                return( 
                    <div className="yourVideos__main">        
                        <div>
                            <iframe className="yourVideos__iframe" src={vids} title="YourVideos Page"  frameBorder="0" allowFullScreen>
                            </iframe>
                         </div>               
                         
                        <div className="yourVideos__info">                        
                        <div>
                            <Avatar 
                               className="yourVideos__avatar"
                               src={image}
                               alt="avatar"
                            />
                        </div>
                            <div className="yourVideos__title">
                               <h3>{title}</h3>
                            </div>
                        </div> 
                      </div>                                               
                )
            })}    
             </div>           
        </div>
    )
}

export default YourVideos;
