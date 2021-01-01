import React from 'react'

const Navbar = () => (
    <div>
        <ul>
            <li><Link to="/newsfeed"><p>Health News</p></Link></li>
            <li><Link to="/infofeed"><p>Health Info</p></Link></li>
            <li><Link to="/foodfeed"><p>Food Recommendation</p></Link></li>
        </ul>
    </div>
)

export default Navbar