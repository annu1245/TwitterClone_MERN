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
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-4 mb-md-0 me-md-auto text-black text-decoration-none">
                    <span class="d-none d-sm-inline"><i class="fab fa-2x fa-twitter bird"></i></span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item pe-3 ps-3">
                        <NavLink exact to="/"   class="nav-link align-middle text-black px-0 pb-4">
                            <i class="fas fa-house-user pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                    Home
                            </span>
                        </NavLink>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <NavLink exact to = "/explore" class="nav-link px-0 align-middle pb-4">
                            <i class="fas fa-hashtag pe-3"></i> 
                            <span class="ms-1 d-none d-sm-inline">
                                Explore
                            </span> 
                        </NavLink>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle pb-4">
                            <i class="far fa-bell pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Notifications
                            </span>
                        </a>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <a href="#" class="nav-link align-middle px-0 pb-4">
                            <i class="far fa-envelope pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Message
                            </span>
                        </a>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <a href="#" class="nav-link align-middle px-0 pb-4">
                            <i class="far fa-bookmark pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Bookmarks
                            </span>
                        </a>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <a href="#" class="nav-link align-middle px-0 pb-4">
                            <i class="far fa-list-alt pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                List
                            </span>
                        </a>
                    </li>
                    <li class="nav-item pe-3 ps-3">
                        <a href="#" class="nav-link align-middle px-0 pb-4">
                        <i class="far fa-user pe-3"></i>
                            <span class="ms-1 d-none d-sm-inline">
                                Profile
                            </span>
                        </a>
                    </li>
                    <li class="nav-item p-2 ps-2">
                        <div class="dropup">
                            <a href="#" class="d-flex align-items-center text-black text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
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
                    <li class="tweet_btn">
                        <a href="#" class="nav-link align-middle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
            <hr/>
                <div class="dropdown nav-item pe-3 ps-3 pt-2">
                    <a href="#" class="d-flex align-items-center text-black text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                            <span class="d-none d-sm-inline mx-3">loser</span>
                            <span><img src = "./images/dot.svg" className = "mx-3"></img></span>
                        </a>
                    <span className = "text-secondary mx-5">hi</span>
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