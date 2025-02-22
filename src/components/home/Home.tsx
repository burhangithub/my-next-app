import Header from "./Header";
import Whatsapp from "./Whatsapp";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

export  function Home () {
    return <>
        <Whatsapp />
        <Header/>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </>
}
