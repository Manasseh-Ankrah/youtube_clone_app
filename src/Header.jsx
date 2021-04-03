import React,{useState,useContext} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import VideoIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import YoutubeIcon from './image/youTube.svg';
import Profile from './image/customer-1.jpg';
import SearchPage from './SearchPage';
import SideBar from './SideBar';
import {AppContext} from './Context';



function Header() {
  const [searchInput,setSearchInput] = useState("");
  // const [toggleIcon,setToggleIcon] = useState(false);

  const {toggleIcon,ChangeIcon} = useContext(AppContext)


    return (
        <div className="header">
            <div className="header__left">

              <span className="header__icons" onClick={()=> ChangeIcon()}>
              {toggleIcon ? <CloseIcon /> : <MenuIcon />}
              </span>
              
              <Link to="/">
                  <img className="header__logo" src={YoutubeIcon} alt="YoutubeIcon"/>
              </Link>
             
            </div>
            <div className="header__input">
              <input 
                  type="text" 
                  value={searchInput} 
                  onChange={e => setSearchInput(e.target.value)} 
                  placeholder="Search"  
              />
                 <Link to={`/search/${searchInput}`}>
                  <SearchIcon className="header__inputButton" />
                 </Link>
            </div>          
           <div className="header__icons">
              <VideoIcon className="header__icon"/>
              <AppsIcon className="header__icon"/>
              <NotificationsIcon className="header__icon"/>
              <Avatar 
                 src={Profile}
                 alt="avatar"
              />
           </div>

           <div style={{display: "none"}}>
                <SearchPage  searchInput={searchInput} />
           </div>

          <span style={{display: "none"}}>
            <SideBar toggleIcon={toggleIcon}/>
          </span>
        </div>
    )
}

export default Header
