

const ExploreNewBooks =()=>{
return (
    // First we give the padding margin and color , then we give container fluid for the component to stretch till the viewport width use d-flex class to create flexbox
    <div className="p-5 mb-4 bg-dark header"> 
        <div className="container-fluid text-white p-5 d-flex justify-content-center align-items-center" >
            <div className="text-center">
                <h1>Find Your Next Book</h1>
                <p>What Would You Like To Read Next</p>
                <a type="button" id ="explore-new-books" className="btn main-color btn-lg text-white" href="/">
                    Explore Top Books
                </a>
            </div>

        </div>
    
    </div>
)
};

export default ExploreNewBooks;