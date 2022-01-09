import './Navbar/Navbar.css';
import Navbar2 from './Navbar/Navbar2';
import Home from "./Pages/Home";

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
                 <div className = "col-md-5 border">
                    <Home/>
                 </div>
                 {/* ---- mid section end ---- */}

                {/* ----- right side start ----- */}
                 <div className = "col-md-4">

                 </div>
                 {/* --- right side end------- */}
            </div>
        </div>

        </>
    )
}

export default Twitter;