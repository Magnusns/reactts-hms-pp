import Aboutsection from "./Aboutsection";
import Herosection from "./Herosection";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage_wrapper">
      <Herosection />
      <Aboutsection />
      {/* <ImageSlider images={IMAGES} /> */}
    </div>
  );
};

export default Homepage;
