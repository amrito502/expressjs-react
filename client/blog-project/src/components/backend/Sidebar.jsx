import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-blog">
          <i className="bi bi-file-earmark"></i>
          <span>Publish Blog</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/all-blog">
          <i className="bi bi-file-earmark"></i>
          <span>All Blogs</span>
        </Link>
      </li>
      <Link className="nav-item">
        <Link className="nav-link" to="/add-team">
          <i className="bi bi-file-earmark"></i>
          <span>Add Team</span>
        </Link>
      </Link>
      <Link className="nav-item">
        <Link className="nav-link" to="/all-team">
          <i className="bi bi-file-earmark"></i>
          <span>Team Members</span>
        </Link>
      </Link>
      <li className="nav-item">
        <Link className="nav-link" to="/add-service">
          <i className="bi bi-file-earmark"></i>
          <span>Add Service</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/all-service">
          <i className="bi bi-file-earmark"></i>
          <span>All Services</span>
        </Link>
      </li>
    </ul>
  </aside>
  );
}

export default Sidebar;
