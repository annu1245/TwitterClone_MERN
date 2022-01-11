import './Navbar/Navbar.css';

import Navbar2 from './Navbar/Navbar2';
import Home from "./Pages/Home";
import RightSection from './Pages/RightSection';
import Explore from './Pages/Explore';
import Notification from './Pages/Notification';
import Message from './Pages/Message';
import Bookmark from './Pages/Bookmark';
import List from './Pages/List';
import Profile from './Pages/Profile';

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

const Twitter = () => {
   
   
    return (
        <>
        <div className = "container">
            <div className = "row">
                {/* ---- left side start --- */}
                <div class="col-auto col-md-3 px-sm-2 px-0">
                    <Navbar2/>
                </div>
                
                 {/* ---- left side end ----  */}

                {/* ----- mid section start ------- */}
                 <div className = "col-md-5 border py-4">
                <Routes>
                    <Route exact path = "/" element={<Home />} />
                    <Route exact path = "/explore" element={<Explore />} />
                    <Route exact path = "/notifications" element={<Notification />} />
                    <Route exact path = "/messages" element={<Message />} />
                    <Route exact path = "/bookmarks" element={<Bookmark />} />
                    <Route exact path = "/lists" element={<List />} />
                    <Route exact path = "/profile" element={<Profile />} />
                </Routes>
                 </div>
                 {/* ---- mid section end ---- */}

                {/* ----- right side start ----- */}
                 <div className = "col-md-4 py-4">
                    <RightSection/>
                 </div>
                 {/* --- right side end------- */}
            </div>
        </div>

        </>
    )
}

export default Twitter;