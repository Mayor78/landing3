import "../style/main.css"
import  '../App.js'

function Footer() {
  let lapIndex = 0;
  showlap();
  
  function showlap() {
    let lap = document.getElementsByClassName("lap");
    for (let i = 0; i < lap.length; i++) {
      lap[i].style.display = "none";
    }
    lapIndex++;
    if (lapIndex >= lap.length) { 
      lapIndex = 0; 
    }
    lap[lapIndex].style.display = "block"; 
    setTimeout(showlap, 2000);
  }
  
  
  return (
    <>
 <main>
 
  <div className="wrapper">
            <div className='lap fade'>
              <img className='laptop' src="../main image/navlap.png" alt="" />
           </div>
        <div className="lap fade">
             <img className='laptop' src="../main image/navlap.jpg" alt="" />
        </div>
    <div className="lap fade">
      <img className='laptop' src="../main image/sales1.jpg" alt="" />
    </div>
    <div className="lap fade">
      <img className='laptop' src="../main image/slide3.jpg" alt="" />
    </div>
    <div className="lap fade">
      <img className='laptop' src="../main image/slide4.jpg" alt="" />
    </div>
    <div className="computer-text">
        <h1>COMPUT<span>ER</span> <br /> <i>STORE</i> </h1>
        <h3>Original and <br /> New computer </h3>
        <button className='btn1'>Shop Now</button>
     </div>
   </div>
   
     
 </main>
 </>
  )
}

export default Footer
