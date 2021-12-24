import './Navbar.css';


const Navbar = () => {
    return (
        <>
        <div className = "main">
        <div class="container">
            <div class="row flex-nowrap" >
                <div class="col-auto col-md-3 px-sm-2 px-0 bg-white">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
                        <a href="/" class="d-flex align-items-center pb-4 mb-md-0 me-md-auto text-black text-decoration-none">
                            <span class="d-none d-sm-inline"><i class="fab fa-2x fa-twitter bird"></i></span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle text-black px-0 pb-4">
                                <i class="fas fa-house-user pe-3"></i>
                                    <span class="ms-1 d-none d-sm-inline">
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle pb-4">
                                    <i class="fas fa-hashtag pe-3"></i> 
                                        <span class="ms-1 d-none d-sm-inline">
                                            Explore
                                        </span> 
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle pb-4">
                                    <i class="far fa-bell pe-3"></i>
                                        <span class="ms-1 d-none d-sm-inline">
                                            Notifications
                                        </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0 pb-4">
                                <i class="far fa-envelope pe-3"></i>
                                    <span class="ms-1 d-none d-sm-inline">
                                        Message
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0 pb-4">
                                <i class="far fa-bookmark pe-3"></i>
                                    <span class="ms-1 d-none d-sm-inline">
                                        Bookmarks
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0 pb-4">
                                <i class="far fa-list-alt pe-3"></i>
                                    <span class="ms-1 d-none d-sm-inline">
                                        List
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0 pb-4">
                                <i class="far fa-user pe-3"></i>
                                    <span class="ms-1 d-none d-sm-inline">
                                        Profile
                                    </span>
                                </a>
                            </li>

                            
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
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
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>
</div>
</>
    )
}

export default Navbar;