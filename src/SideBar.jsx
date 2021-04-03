import React,{useState,useContext} from 'react';
import './SideBar.css';
import SidebarRow from './SidebarRow';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {AppContext} from './Context';


function SideBar() {
  
   // const {toggleIcon} = useContext(AppContext);
   const {toggleIcon,ChangeIcon} = useContext(AppContext)
    
    return (
        <div className={toggleIcon ? "sidebar" : "noToggle"}>
            <Link to="/" className="link__style">
              <SidebarRow selected Icon={HomeIcon} title="Home" />          
            </Link>
            <Link to="/trending" className="link__style">
                <SidebarRow  Icon={WhatshotIcon} title="Trending" />            
            </Link>
            <Link to="/subscription" className="link__style">
               <SidebarRow  Icon={SubscriptionIcon} title="Subscription" />           
            </Link>
           
            <hr />

            <Link to="/library" className="link__style">
               <SidebarRow Icon={VideoLibraryIcon} title="Library" />          
            </Link>
            <Link to="/history" className="link__style">
               <SidebarRow Icon={HistoryIcon} title="History" />          
            </Link>
            <Link to="/your_videos" className="link__style">
               <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />         
            </Link>
            <Link to="/watch_later" className="link__style">
               <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />         
            </Link>
            <Link to="/liked_videos" className="link__style">
               <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />        
            </Link>
            <Link to="/show_more" className="link__style">
               <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />        
            </Link>

            <hr />
            
        </div>
    )
}

export default SideBar
