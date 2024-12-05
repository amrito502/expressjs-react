import Navbar from "../components/backend/Navbar";
import Sidebar from "../components/backend/Sidebar";

function BackendLayout(props) {
  return (
   <>
      <Navbar/>
      <Sidebar/>
      <main id="main" className="main">
      <div class="pagetitle">

      <nav>
        <ol class="breadcrumb">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
      {props.children}
      </main>
      
   </>
  );
}

export default BackendLayout;
