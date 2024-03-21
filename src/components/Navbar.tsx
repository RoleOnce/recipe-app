//Bilge

import "../styling/NavbarStyle.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <div className="navbar container" >
      <a className='logo'><Link to='/'>Logo</Link></a>
      <div className='nav-links'>
      <a><Link to='/'>Home</Link></a>
      <a><Link to='/recipes'>Recipes</Link></a>
      <a><Link to='/search'>Search</Link></a>
      <a><Link to='/adminpage'>Admin</Link></a>
      </div>
     
    </div>
  
  )
}
export default Navbar