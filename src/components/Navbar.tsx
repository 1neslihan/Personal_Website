function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid  justify-content-end p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around" 
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav fs-5 w-100 justify-content-around">
              <li className="nav-item">
                <a className="nav-link p-0" aria-current="page" href="#AboutMe">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="#MyProjects">
                  My Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="#ContactMe">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
