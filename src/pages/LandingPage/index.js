import "./style.css";

//Components
import Button from "../../components/Button";
import Header from "../../components/Header";

//Assets
import landingDesign from "../../assets/landingDesign.png";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <section className="landing">
        <img
          className="landingDesign"
          src={landingDesign}
          alt="Futuristic Design"
        />
        <div>
          <p className="slogan">For the data that never sleeps</p>
          <Button text="ABOUT US" destination="/" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
