import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Team />
            <Portfolio />
            {/* <Testimonial /> */}
            <Contact />
        </>
    );
}
