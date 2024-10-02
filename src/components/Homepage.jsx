import { FaLongArrowAltRight } from "react-icons/fa"
import About from "./About"
import { NavLink } from "react-router-dom"
const Homepage = () => {
  return (
    <div>
         <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">Explore the World, One Country at a Time</h1>
                <p className="paragraph">
                    Discovery the history, culture, and the beauty of every nation. Sort, search, and filter through countries to find the details you need
                </p>
                <NavLink to={'/country'}>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring
                    <FaLongArrowAltRight />

                </button>
                </NavLink>
                
            </div>
            <div className="hero-image">
                <img src="/img/image.png" className="banner-image" alt="world" />
            </div>
        </div>
    </main>

    <About/>
  
    </div>
   
    
  )
}

export default Homepage
