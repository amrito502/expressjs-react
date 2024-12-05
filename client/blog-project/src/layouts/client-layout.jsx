// import "../assets/css/styles.css";
// import "../assets/css/swiper-bundle.min.css";
import Footer from "../components/client/Footer";
import TopBar from "../components/client/TopBar";
function ClientLayout(props) {
  return (
    <div>
      <TopBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default ClientLayout;
