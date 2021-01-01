import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <div style={{ color: "white"}}>
        <ul className="navBar">
            <li><Link to="/newsfeed"><p className="navItem">Health News</p></Link></li>
            <li><Link to="/infofeed"><p className="navItem">Health Info</p></Link></li>
            <li><Link to="/foodfeed"><p className="navItem">Food Recommendation</p></Link></li>
        </ul>
    </div>
)

export default Navbar