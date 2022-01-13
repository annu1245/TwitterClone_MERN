import Follow from './Follow';
import RightExplore from '../Components/RightExplore';

const RightSection = () => {
    return (
        <>
        
            <RightExplore/>
        
        <div className = "follow_div bg-light">
            <Follow/>
        </div>
        </>
    )
}

export default RightSection;