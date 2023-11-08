export const ReturnBook=()=>{
    return(
       
                            <div className="col text-center pl-5">
                                <div className="pl-100">
                                    <img src={require('../../src/Images/BooksImages/book-luv2code-1000.png')}
                                        alt="book"
                                        width="150"
                                        height="233"></img>

                                    <h6 className="mt-10 p-2 text-center">Book</h6>
                                    <a type="button" id="explore-new-books" className="btn color-light text-white" href="/">
                                        Reserve</a>
                                </div>
                            </div>
                        
    );
}