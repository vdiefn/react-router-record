import { NavLink } from 'react-router-dom'

function Navbar() {
  return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/about'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/album'>相簿</NavLink>
          </li>
        </ul>  
      </div>
    </div>
  </nav>

  

  )
}

export default Navbar