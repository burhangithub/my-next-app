import FirstSection from "../services/FirstSection";
import Header from "./Header";
import SecondSection from "../services/SecondSection";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";

export function Services() {
    return <>
        <Whatsapp />
        <Header/>
        <FirstSection />
        <SecondSection />
        <Footer />
    </>
}
