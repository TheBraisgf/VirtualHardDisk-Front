import "./style.css";

//Components
import Button from "../../components/Button"
import Header from "../../components/Header";

//Assets
import landingDesign from "../../assets/landingDesign.png"


const LandingPage = ()=>{
    return(
        <section className="landingPage">
            <Header />
            <img className="landingDesign" src={landingDesign} alt="Futuristic Design"/>
        <div>
        <h1 className="slogan">For the data
        that never sleeps</h1>
        <Button text="ABOUT US"/>
        </div>
        </section>
    )
}

export default LandingPage