import './App.css';

import {Navbar} from './Components/Navbar';
import { Carousel } from './Homepage/Carousel';
import ExploreNewBooks from './Homepage/ExploreNewbooks';
import { Footer } from './Homepage/Footer';
import { Hero } from './Homepage/Hero';
import { LibraryServices } from './Homepage/LibraryServices';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ExploreNewBooks/>
     <Carousel/>
     <Hero/>
     <LibraryServices/>
     <Footer/>
    </div>
  );
}

export default App;
