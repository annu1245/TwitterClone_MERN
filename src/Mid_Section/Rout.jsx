import Home from "../Pages/Home";
import Explore from '../Pages/Explore';
import Notification from '../Pages/Notification';
import Message from '../Pages/Message';
import Bookmark from '../Pages/Bookmark';
import List from '../Pages/List';
import Profile from '../Pages/Profile';

import {
    Routes,
    Route,
  } from "react-router-dom";

const Rout = () => {
    return (
        <>
        <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route exact path = "/explore" element={<Explore />} />
            <Route exact path = "/notifications" element={<Notification />} />
            <Route exact path = "/messages" element={<Message />} />
            <Route exact path = "/bookmarks" element={<Bookmark />} />
            <Route exact path = "/lists" element={<List />} />
            <Route exact path = "/profile" element={<Profile />} />
        </Routes>
        </>
    )
}

export default Rout;