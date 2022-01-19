import Follow from '../Pages/Follow';
import RightExplore from '../Components/RightExplore';
import SearchBar from '../Components/SearchBar';

const RightSection = () => {
    return (
        <>
         <SearchBar/>
        <RightExplore/>
        <div className = "follow_div bg-light">
            <Follow/>
        </div>
        </>
    )
}

export default RightSection;