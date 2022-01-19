import SearchBar from "./SearchBar";

const RightExplore = () => {
    return(
        <>
           

            <div className = "right_div bg-light">
                <h4 className = "ps-3 py-3 fw-bold">What's Happining</h4>
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <span class="mb-1 text-secondary">List group item heading</span>
                    <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1 fw-bold">Some placeholder content in a paragraph.</p>
                    <div className = "right_list_div_img"> 
                        <img className = "img-fluid" src = "./images/cricket.jpg"></img>
                    </div>
                    </div>
                    <small className = "text-muted">And some small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-muted">And some muted small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-muted">And some muted small print.</small>
                </a>
               
                
                {/* <a href="#" class="list-group-item list-group-item-action">
                    <span>show more</span>
                </a> */}

                <a class="list-group-item list-group-item-action">
                    show more
                </a>
                </div>
            </div>
        </>
    )
}

export default RightExplore;