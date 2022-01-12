import { useRef } from 'react';
// import '../Navbar/Navbar.css';

const TwitBox = () => {
    const textRef_home = useRef();

    const onChangeHandler_home = function(e) {
        const target = e.target;
        textRef_home.current.style.height = "30px";
        textRef_home.current.style.height = `${target.scrollHeight}px`;
     }
    return(
        <>
        <div className = "row">
            <div className = "mod_img col-md-3">
                <img className = "img-fluid" src="./images/profile.svg" alt=""/>
            </div>
            <div className = "col-md-9">
                <textarea
                    ref={textRef_home}
                    onChange={onChangeHandler_home}
                    className="text-area"
                    row = "3"
                    placeholder = "what's Happening..."
                />
            </div>
        </div>
        <hr/>
        <div className = "float-end">
            <button className = "btn btn-primary rounded-pill">Tweet</button>
        </div>
        
        </>
    )
}

export default TwitBox;