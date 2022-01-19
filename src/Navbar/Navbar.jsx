import { useRef } from "react";
import { NavLink, Link} from "react-router-dom";
import './Navbar.css';
const Navbar2 = () => {

        const textRef = useRef();

        const onChangeHandler = function(e) {
            const target = e.target;
            textRef.current.style.height = "30px";
            textRef.current.style.height = `${target.scrollHeight}px`;
        }
    return (
        <>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-2 mb-md-0 me-md-auto text-black text-decoration-none">
                    <span class="d-none d-sm-inline"><i class="fab fa-2x fa-twitter bird"></i></span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item side_nav">
                        <NavLink exact to="/"   class="nav-link align-middle text-black px-0 pb-2" style={{ textDecoration: 'none' }}>
                            <i class="fas fa-house-user pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                    Home
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink exact to = "/explore" class="nav-link px-0 align-middle pb-2">
                            <i class="fas fa-hashtag pe-3"></i> 
                            <span class="ms-1 d-none d-sm-inline">
                                Explore
                            </span> 
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink to = "/notifications" class="nav-link px-0 align-middle pb-2">
                            <i class="far fa-bell pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Notifications
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink to ="/messages" class="nav-link align-middle px-0 pb-2">
                            <i class="far fa-envelope pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Messages
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink to="bookmarks" class="nav-link align-middle px-0 pb-2">
                            <i class="far fa-bookmark pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Bookmarks
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink to = "/lists" class="nav-link align-middle px-0 pb-2">
                            <i class="far fa-list-alt pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                List
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <NavLink to = "/profile" class="nav-link align-middle px-0 pb-2">
                        <i class="far fa-user pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Profile
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item side_nav">
                        <div class="dropup">
                            <a href="#" class="d-flex align-middle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src = "./images/more.svg" className = "more_svg"></img>
                                    <span class="d-none d-sm-inline mx-3"> 
                                        More 
                                    </span>
                            </a>
                            <ul class="lh-lg dropdown-menu dropdown-menu-white drop_text shadow">
                                <li><a class="dropdown-item" href="#"><i class="far fa-user pe-3"></i>Settings</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fas fa-bolt pe-3"></i> Moments </a></li>
                                <li><a class="dropdown-item" href="#"><i class="far fa-file-alt pe-3"></i> Newsletters </a></li>
                                <li><a class="dropdown-item" href="#"><i class="fas fa-rocket pe-3"></i> Tweeter for professionals </a></li>
                                <li><a class="dropdown-item" href="#"><i class="far fa-chart-bar pe-3"></i> Analytics </a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item t-btn side_nav">
                        <a href="#" class=" tweet_btn align-middle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <span class="ms-1 d-none d-sm-inline text-white fw-bold fs-5">
                                Tweet
                            </span>
                        </a>
                    </li>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">
                                        Modal title
                                    </h5>
                                    <button type="button" class="btn-close mod_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className = "row">
                                        <div className = "mod_img col-md-4">
                                            <img className = "img-fluid" src="./images/profile.svg" alt="" />
                                        </div>
                                        <div className = "col-md-8">
                                            <textarea
                                                ref={textRef}
                                                onChange={onChangeHandler}
                                                className="text-area"
                                                row = "3"
                                                placeholder = "what's Happening.."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Tweet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
        
                <div class="dropdown nav-item side_nav">


                    <div href="#" class="d-flex align-items-center text-black text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className = "row">
                            <div className = "col-md-3">
                                <img src="https://github.com/annu1245.png" alt="hugenerd" width="40" height="40" className="rounded-circle"/>
                            </div>
                            <div className = "col-md-6">
                                <div className = "row">
                                    <div className = "col-md-12">loser</div>
                                    <div className = "col-md-12 text-secondary">@loser</div>
                                </div>
                            </div>
                            <div className = "col-md-3 gy-2">
                                <img src = "./images/dot.svg"></img>
                            </div>
                        </div>
                    </div>


                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar2;