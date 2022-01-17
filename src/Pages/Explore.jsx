import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import DetailContent from "../Components/DetailContent";

const Explore = () => {
    return (
        <>
        <Header header = "Explore"/>
        <SearchBar/>
        <nav class="navbar navbar-expand-lg ">
        <div class="exp_div">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Covid-19</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
    </div>
</nav>
<DetailContent/>

        </>
    )
}

export default Explore;