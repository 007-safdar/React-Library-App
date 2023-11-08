
export const Footer = () => {
    return (
        <div id="explore-new-books">
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-5'id="explore-new-books">
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/safdarahmed/'className='col-md-4 mb-0 text-white text-decoration-none'>Let's Connect ?</a>
                <p className='col-md-2 mb-0 text-white ml-2'>© React Library App, Inc</p>
               
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link px-2 text-white'>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link px-2 text-white'>
                            Search Books
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}