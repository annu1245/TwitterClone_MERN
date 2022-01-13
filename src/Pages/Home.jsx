import TwitBox from '../Components/TwitBox';
import DetailContent from '../Components/DetailContent';

const Home = () => {
    return (
        <>
        <h4 className = "pb-3 sticky-top mid_div_up">Home</h4>
            <TwitBox/>
                <hr className = "mid_section_hr"/>
            <DetailContent/>  
            <img src = "./images/book.jpeg" className = "img-fluid"/> 
        </>
    )
}

export default Home;