import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { JokeSection } from "../components/JokeSection";

export const HomePage = () => {

    return (
        <div className="w-screen h-screen">
            <NavBar/>
            <HeroSection/>
            <JokeSection/>
            <Footer/>
        </div>
    );
};
