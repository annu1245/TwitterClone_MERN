const Follow = () => {
    return (
        <>
            <h4 className = "py-2 ps-3"> who to follow </h4>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <img src = "./images/cricket.jpg" className = "rounded-circle" width = "50" height = "50" />
                <div class="ms-3 me-auto">
                <div class="fw-bold">Subheading</div>
                Cras justo odio
                </div>
                <button className = "bg-dark text-white follow_btn rounded-pill">Follow</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <img src = "./images/cricket.jpg" className = "rounded-circle" width = "50" height = "50" />
                
                <div class="ms-3 me-auto">
                <div class="fw-bold">Subheading</div>
                Cras justo odio
                </div>
                <button className = "bg-dark text-white follow_btn rounded-pill">Follow</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <img src = "./images/cricket.jpg" className = "rounded-circle" width = "50" height = "50" />
               
                <div class="ms-3 me-auto">
                <div class="fw-bold">Subheading</div>
                Cras justo odio
                </div>
                <button className = "bg-dark text-white follow_btn rounded-pill">Follow</button>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
               <a>Show more</a>
            </li>
        </>
    )
}

export default Follow;