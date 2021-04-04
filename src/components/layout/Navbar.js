import {Link,NavLink} from "react-router-dom"
const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Todo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </nav>
   )
};

export default Navbar;

