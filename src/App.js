import React,{useContext} from 'react'
import "./App.css";
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Trending from './Trending';
import Subscription from './Subscription';
import Library from './Library';
import History from './History';
import YourVideos from './YourVideos';
import WatchLater from './WatchLater';
import LikedVideos from './LikedVideos';
import ShowMore from './ShowMore';
import Context from './Context';
import AppContext from './Context';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {

    return (
        <div className='app'>
          <Context> 

            <Router>
              <Header />
                <Switch>
                    <Route path="/" exact>                      
                           <div className='app__page'>
                              <SideBar />                            
                              <RecommendedVideos />
                           </div>
                    </Route>

                    <Route path="/search">
                        <div className="app__page"> 
                          <SideBar />
                          <SearchPage />
                        </div>
                    </Route>

                    <Route path="/trending">
                        <div className="app__page"> 
                          <SideBar />
                          <Trending />
                        </div>
                    </Route>

                    <Route path="/subscription">
                        <div className="app__page"> 
                          <SideBar />
                          <Subscription />
                        </div>
                    </Route>

                    <Route path="/library">
                        <div className="app__page"> 
                          <SideBar />
                          <Library />
                        </div>
                    </Route>

                    <Route path="/history">
                        <div className="app__page"> 
                          <SideBar />
                          <History />
                        </div>
                    </Route>

                    <Route path="/your_videos">
                        <div className="app__page"> 
                          <SideBar />
                          <YourVideos />
                        </div>
                    </Route>

                    <Route path="/watch_later">
                        <div className="app__page"> 
                          <SideBar />
                          <WatchLater />
                        </div>
                    </Route>

                    <Route path="/liked_videos">
                        <div className="app__page"> 
                          <SideBar />
                          <LikedVideos />
                        </div>
                    </Route>

                    <Route path="/show_more">
                        <div className="app__page"> 
                          <SideBar />
                          <ShowMore />
                        </div>
                    </Route>

                </Switch>

            </Router>

          </Context>

     
            
         
            
        </div>
    )
}

export default App
