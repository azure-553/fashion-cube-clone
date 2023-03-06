// import Advertisement from "./components/Advertisement";
import "./assets/css/style.css";
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import HomeBanner from "./components/HomeBanner";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";


function App() {
  return (
    <>
    <HomeBanner/>
    <CategoryBanner/>
    {/* <Advertisement/> */}
    <Benefit/>
    <Footer/> 
    </>
  );
}

export default App;
