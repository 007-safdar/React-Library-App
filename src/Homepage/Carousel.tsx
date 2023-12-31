import { ReturnBook } from "./ReturnBook";

export const Carousel = () => {

    return (
        <div>

        
        <div className="container mt-5" style={{ height: 465 }}>
            <div className="homepage-carousel-title">
                <h3> Find your next "I Stayed Up Too Late Reading" Book</h3>
            </div>
            
                <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false" >
                    {/*Desktop*/}

                    <div className="carousel inner">

                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center align-items-center">
                                <ReturnBook />
                                <ReturnBook />
                                <ReturnBook />
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="row d-flex justify-content-center align-items-center">
                                <ReturnBook />
                                <ReturnBook />
                                <ReturnBook />
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="row d-flex justify-content-center align-items-center">
                                <ReturnBook />
                                <ReturnBook />
                                <ReturnBook />
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>



                {/*Mobile*/}
                <div className="d-lg-none">
                <div className="row d-flex justify-content-center align-items-center">
                    <ReturnBook />
                    </div>
                </div>

        </div>
        <div className="homepage-carousel-title mb-4">
                <a className="btn col-xs btn-outline-secondary btn-lg align-self-bottom" href='/'>View More</a>
            </div>
        </div>



    )
};