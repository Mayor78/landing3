import React from "react";
import Navbar from './component/Navbar'
import Footer from "./component/Footer";
import Head from "./component/Head";
import Section from "./component/Section"

function App() {
//   let lapIndex = 0;
// showlap();

// function showlap() {
//   let lap = document.getElementsByClassName("lap");
//   for (let i = 0; i < lap.length; i++) {
//     lap[i].style.display = "none";
//   }
//   lapIndex++;
//   if (lapIndex > lap.length) {
//     lapIndex = 0; // Reset lapIndex to 0
//   }
//   lap[lapIndex - 1].style.display = "block";
//   setTimeout(showlap, 2000); 
// }

  return (
    <div>
      <Navbar/>
       <Footer/>
       <Head/>
       <Section/>
       {/* {lapIndex} */}
      
    

    </div>
  )
}

export default App

