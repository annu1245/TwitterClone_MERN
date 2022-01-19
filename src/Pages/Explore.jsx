import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import DetailContent from "../Components/DetailContent";
import Exp_route from './Exp_route';

const Explore = () => {
    return (
        <>
        <Header header = "Explore"/>
        <SearchBar/>
        <Exp_route/>
        <DetailContent/>

        </>
    )
}

export default Explore;