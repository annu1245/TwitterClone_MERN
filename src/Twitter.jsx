import './Navbar/Navbar.css';

import Navbar from './Navbar/Navbar';
import MidSection from './Mid_Section/MidSecton';
import RightSection from './Right_Section/RightSection';

const Twitter = () => {
    return (
        <>
        <div className = "container">
            <div className = "row">
                <div class="col-auto col-md-3 px-sm-2 px-0">
                    <Navbar/>
                </div>
                <div className = "col-md-5 mid_scroll border">
                    <MidSection/>
                </div>
                <div className = "col-md-4 py-4">
                    <RightSection/>
                </div>
            </div>
        </div>

        </>
    )
}

export default Twitter;