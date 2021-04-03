import React,{useState,useEffect} from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage(props) {

    const Api_key = "AIzaSyBlS38y4IWzlRrR9aPONH3TKovlA6Y3CEE";
    const ChannelId = "UCBR8-60-B28hp2BmDPdntcQ";
    const Results = 2;
    const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&part=snippet,id=${props.searchInput}&order=date&maxResults=${Results}`;
 
   const [data,setData] = useState([]);
   const [errorMsg,setErrorMsg] = useState(false);

//    useEffect(()=> {
//     const fetch_Info = async() => {
//         const Data = await fetch(Fetch_url);
//         const response = await Data.json();
//         const recieve = response.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
//         setErrorMsg(true);
//         setData(recieve);  
//     }
//     fetch_Info();
//   },[])
    return (
        <div className="SearchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            {data.map(vids => {
                return(                                   
                        <iframe className="recommendedVideos__iframe" src={vids} title="SearchPage Page"  frameBorder="0" allowFullScreen>
                         </iframe>                                 
                )
            })}    
               {/* <VideoRow 
                views="1.4M"
                subs="659K"
                description=""
                timestamp="59 seconds ago"
                channel="Manasseh S. Ankrah"
                title="Programming Languages ."
                image={VideoRowImage3}
            /> */}
            
            
        </div>
    )
}

export default SearchPage
