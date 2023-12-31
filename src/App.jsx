import styles from "./style";
import {Reach,Career,Carloan, Billing, Business, CardDeal,Businessloan, Clients,Carousel,Homeloan, CTA, Footer, Navbar, Stats, Testimonials, Hero,Contact,Apply,CreditCard, Personalloan } from "./components";

import {BrowserRouter, Routes,Route } from "react-router-dom";
import Test from "./Test";
import Home from "./Home";


function App  () {
return (

  <BrowserRouter>
<div style={{zIndex:9999}} className="bg-gradient-to-r from-gray-100 to-gray-300  overflow-hidden">
    <div className={` ${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth} `}>
        <Navbar /> 
      </div>
    </div>
    </div>
<Routes>
<Route path="/" element={  
<div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
      
    </div> 
    }/>

    <Route path="/Contact" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Contact/>
      </div>
      </div>
}/>
  <Route path="/Partners" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Clients/>
      </div>
      </div>
}/>
  <Route path="/Carloan" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Carloan/>
      </div>
      </div>
}/>
  <Route path="/Personalloan" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Personalloan/>

      </div>
      </div>
}/>
  <Route path="/homeloan" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Homeloan/>
      </div>
      </div>
}/>
  <Route path="/Credit" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<CreditCard/>
      </div>
      </div>
}/>
  <Route path="/Businessloan" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Businessloan/>
      </div>
      </div>
}/>
  <Route path="/Career" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Career/>
      </div>
      </div>
}/>
  <Route path="/ApplyLoans" element={
     <div className={`bg-gradient-to-r from-gray-100 to-gray-300  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
<Reach/>
      </div>
      </div>
}/>
</Routes>

 
  {/* <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
     
      <Stats />
        <Business />
        <CardDeal/>
        <Billing/>
    <Contact/>
    <CTA/>
    <Testimonials/>
    <Clients/>
 <Apply/>
    <Footer/>
      </div>
    </div>


  </div> */}
 
  </BrowserRouter>
);

}

export default App;
