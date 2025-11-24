import Header from "./Header";
import Whatsapp from "./Whatsapp";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";
import SEO from "../SEO";

export function Home() {
    return <>
        <SEO />
        <Whatsapp />
        <Header/>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <Footer />
    </>
}
