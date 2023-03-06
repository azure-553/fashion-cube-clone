import AOS from "aos";
import { useEffect } from "react";

// import Advertisement from "./components/Advertisement";
import "./assets/css/style.css";
import "aos/dist/aos.css";

import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import HomeBanner from "./components/HomeBanner";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import HomeCartView from "./components/HomeCartView";


function App() {
  useEffect(() => {
    AOS.init();
  })
  
  return (
    <>
    <HomeCartView/>
    <HomeBanner/>
    <CategoryBanner/>
    {/* <Advertisement/> */}
    <Benefit/>
    <Footer/> 
    </>
  );
}

export default App;
