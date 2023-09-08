import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import { homeObjOne, homeObjTwo, homeObjThree } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { IconContext } from "react-icons";
// import { Img } from "../components/InfoSection/InfoElements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const [counter, setCounter] = useState(1)
  const [list,setList] = useState([])
  const increment = () => {
    setCounter((prev)=>(prev + 1));
    
    console.log(list)
  }

  useEffect(()=>{
    setList((prev) => [...prev, counter])
  }, [counter])
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <IconContext.Provider value={{color: "#fff"}}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services/>
      <InfoSection {...homeObjThree} />
      <Footer/>
      <button onClick={increment}>+</button>
      <ul>{list.map(e=><li>{e}</li>)}</ul>
      </IconContext.Provider>
    </>
  );
};

export default Home;
