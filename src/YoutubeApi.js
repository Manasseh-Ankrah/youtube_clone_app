import React,{useState,useEffect} from 'react';
import axios from 'axios';

function YoutubeApi() {
   const Api_key = "AIzaSyBlS38y4IWzlRrR9aPONH3TKovlA6Y3CEE";
   const ChannelId = "UCXgGY0wkgOzynnHvSEVmE3A";
   const Results = 10;
   const Fetch_url = `https://www.googleapis.com/youtube/v3/search?key=${Api_key}&channelId=${ChannelId}&part=snippet,id&order=date&maxResults=${Results}`;


  const [data,setData] = useState([]);

  useEffect(()=> {
    const fetch_Info = async() => {
        const Data = await fetch(Fetch_url);
        const response = await Data.json();
        const recieve = response.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
        setData(recieve);  
    }
    fetch_Info();
  },[])

  

    
    return (
        <div>
            {data.map(vids => {
                return(                 
                        <iframe width="560" height="315" src={vids} title="YoutubeApi Page"  frameBorder="0" allowFullScreen>
                         </iframe>               
                )
            })}    
        </div>
    )
}

export default YoutubeApi
