import Carousel from "./Carousel";
import Footer from "./Footer";


const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-8 text-color">
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
