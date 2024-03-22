import "../styling/NavbarStyle.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <div className="navbar container" >
      <a className='logo'><Link to='/'>Logo</Link></a>
      <div className='nav-links'>
      <a><Link to='/'>Home</Link></a>
      <a><Link to='/category'>Categories</Link></a>
      <a><Link to='/search'>Search</Link></a>
      <a><Link to='/AdminPage'>Admin</Link></a>
      </div>
     
    </div>
  
  )
}
export default Navbar
