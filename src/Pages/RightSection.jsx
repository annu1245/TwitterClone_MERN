import Follow from './Follow';


const RightSection = () => {
    return (
        <>
            <form class="d-flex">
                <input class="form-control me-2 search_bar bg-light" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <div className = "py-4 my-4 ps-2 bg-light right_div">
                <h4 className = "ps-3 fw-bold">What's Happining</h4>
                <div class="list-group">
                <a href="#" class="list-group-item bg-light list-group-item-action mb-2" aria-current="true">
                    <span class="mb-1 text-secondary">List group item heading</span>
                    <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1 fw-bold">Some placeholder content in a paragraph.</p>
                    <div className = "right_list_div_img"> 
                        <img className = "img-fluid" src = "./images/cricket.jpg"></img>
                    </div>
                    </div>
                    <small className = "text-muted">And some small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-light mb-2">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-muted">And some muted small print.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-light mb-2">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                    <small class="text-muted">And some muted small print.</small>
                </a>
               
                </div>
                <a href="#" class="list-group-item list-group-item-action bg-light">
                    <span>show more</span>
                </a>
            </div>

            <div className = "follow_div bg-light">
                <Follow/>
            </div>
        </>
    )
}

export default RightSection;