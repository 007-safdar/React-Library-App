export const Hero = () => {
    return (

       <div>
        <div className="container-fluid d-none d-lg-block mt-5" style={{"color":"black"}}>

             {/*Desktop */}
            <div className="row g-0">
            <div className="col-6 col-image-left"></div>
            <div className="col-6 md-5 d-flex justify-content-center align-items-center">
                <div className="col-8 text-center">                
                <h1>
                    What Have You Been Reading ?
                </h1>
                <p className="lead">
                The library team would love to know what you have been reading.
                Whether it is to learn a new skill or grow within one,
                we will be able to provide the top content for you!
                </p>
                <a type="button" id="explore-new-books" className="btn btn-lg text-white" href ="/" >Sign Up</a>
                </div>
            </div>
            <div className="col-6 md-5 d-flex justify-content-center align-items-center">
                <div className="col-8 text-center">                
                <h1>
                Our collection is always changing!
                </h1>
                <p className="lead">
                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most accurate book selection possible
                                for our React Library students! We are diligent about our book selection
                                and our books are always going to be our
                                top priority.
                </p>
               
                </div>
            </div>
           
            <div className="col-6 col-image-right"></div>
            </div>

        </div>

        {/*Mobile*/}
        <div className="container-fluid d-lg-none mt-5" style={{"color":"black"}}>

            
            <div className="row g-0">
            <div className="col-6 col-image-left w-100"></div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="text-center">                
                <h1>
                    What Have You Been Reading ?
                </h1>
                <p className="lead">
                The library team would love to know what you have been reading.
                Whether it is to learn a new skill or grow within one,
                we will be able to provide the top content for you!
                </p>
                <a type="button" id="explore-new-books" className="btn btn-lg text-white" href ="/" >Sign Up</a>
                </div>
            </div>
            <div className=" md-5 d-flex justify-content-center align-items-center mt-5">
                <div className="text-center">                
                <h1>
                Our collection is always changing!
                </h1>
                <p className="lead">
                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most accurate book selection possible
                                for our React Library students! We are diligent about our book selection
                                and our books are always going to be our
                                top priority.
                </p>
               
                </div>
            </div>
           
            <div className="col-6 col-image-right w-100 mt-5"></div>
            </div>
</div>
</div>


        );
}

/*
CSS Grid
image text
text  image

*/