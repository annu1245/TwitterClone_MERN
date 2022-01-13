
const DetailContent = () => {
    return (
        <>
        <div className = "row mid_div py-3">
        <div>
            <i class="fab fa-twitch mx-3 ms-4"></i>
            <span className = "text-muted fw-bold me-3">Technology</span>
            <a>See more</a>
        </div>
        <div className = "row mt-3">
            <div className = "col-md-2 ">
                <img src = "./images/cricket.jpg" className = "rounded-circle" width = "50" height = "50"/>
            </div>
            <div className = "col-md-10 gx-1">
                <div className = "fw-bold">Cricket</div>
                <span>yees</span>
                <img src = "./images/mobile.jpg" className = "img-fluid mt-4 de_img" />
            </div>

        </div>

        </div>


        </>
    )
}

export default DetailContent;