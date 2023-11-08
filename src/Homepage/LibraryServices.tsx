export const LibraryServices = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex align-items-center border shadow-lg">
                <div className="col-lg-6 text-center mt-5 display-4 fw-bold">
                    <h2>
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="lead">
                        If You can't find what You're looking for, send our Admin a personal message!
                    </p>
                    <a type="button" id="explore-new-books" className="btn btn-lg text-white mt-3 mb-5" href="/">Sign Up</a>
                </div>
                <div className="col-4 d-none d-lg-block offset-lg-1 shadow-lg lost-image align-center">
                </div>
                {/*Mobile*/}
                <div className="col-4 d-lg-none offset-lg-1 shadow-lg lost-image align-center w-100">
                </div>
            </div>
        </div>
    )
};