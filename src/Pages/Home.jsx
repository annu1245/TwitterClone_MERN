import TwitBox from '../Components/TwitBox';
import DetailContent from '../Components/DetailContent';
import Header from '../Components/Header';

const Home = () => {
    return (
        <>
        <Header header = "Home"/>
        <TwitBox/>
            <hr className = "mid_section_hr"/>
        <DetailContent/>  
        <img src = "./images/book.jpeg"/>
        </>
    )
}

export default Home;