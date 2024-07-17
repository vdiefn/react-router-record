import { Link } from 'react-router-dom'

function Navbar() {
  return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
          </li>
        </ul>  
      </div>
    </div>
  </nav>

  

  )
}

export default Navbar