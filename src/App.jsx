import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Discover from "./components/discover/Discover";
import Arrival from "./components/arrival/Arrival";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";
import Arrow from "./components/arrow/Arrow";

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Discover/>
      <Arrival/>
      <Cta/>
      <Footer/>
      <Arrow/>
    </>
  )
}