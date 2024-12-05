
function Navbar() {
  return (
    <header
    id="header"
    className="header fixed-top d-flex align-items-center"
  >
    <div className="d-flex align-items-center justify-content-between">
      <span></span>
      <a href="index.html" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Admin Blog</span>
      </a>
     
      <i className=" toggle-sidebar-btn"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg></i>
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item dropdown pe-3">
          <a
            className="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img
              src="assets/img/profile-img.jpg"
              alt="Profile"
              className="rounded-circle"
            />
            <span className="d-none d-md-block dropdown-toggle ps-2">
              K. Anderson
            </span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="users-profile.html"
              >
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="#"
              >
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Navbar;
