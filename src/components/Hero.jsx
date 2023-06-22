import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { stats } from "../constants";
import Stats from "./Stats";
import Business from "./Business";
import { layout } from "../style";
import CTA from "./CTA";
import Footer from "./Footer";
import CardDeal from "./CardDeal";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Billing from "./Billing";
import Contact from "./Contact";
import CreditCard from "./CreditCard";
import Carousel from "./Carousel";
import Reach from "./Reach";
import { carloan3 ,trustus} from "../assets";
const Hero = () => {
  return <>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 animate-jump-in animate-once animate-delay-500">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white ">Providing Best</span> <span className="  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

            Financial  Service For{" "}</span>
            <span className="text-white">Ages</span> 
          </p>
        </div>

        <div  className=" flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Generation</span>{" "}
          </h1>
      
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Financial Service
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className=" animate-pulse animate-once animate-delay-500 w-[100%] h-[100%] relative z-[5]" />

   
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      
      </div>

      {/* <div  className={`ss:hidden ${styles.flexCenter}`}>
      <a href="Contact">
      <GetStarted />
      </a> 
      </div> */}

    </section>
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300">
    <div className={`bg-gradient-to-r from-gray-100 to-gray-300 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats/>
      <Business/>
      <Billing/>
      <Carousel/>
       <CardDeal/>
       <Testimonials/>
       <h2 className={ `${styles.heading2} flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
      Our Partners
      </h2>
       <Clients/>
       <Reach/>
       <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h3 className="font-poppins font-semibold xs:text-[48px] text-[30px]" style={{color: 'Blue'}}>  Why to  <span style={{color: 'Blue'}}>Trust</span>{' '} Us ? </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{color: 'Black'}}>
      Finages has the means and resources to make life comfortable and secure for you. Our 24/7 digital resources are designed to serve your immediate and urgent computing needs, so that you can compute your car loan eligibility, EMIs, cost of loan, etc. With an eye on your wellbeing, we work for you. Trust us, you'll thank your stars that you're with us.
      </p>
    </div>

   


    <div className={layout.sectionImg}>
      <img src={trustus} alt="billing" className="w-[80%] h-[80%] animate-bounce animate-infinite animate-duration-[2000ms] rounded-lg" />
    </div>
  </section>

      <Footer/>  

      </div>
</div>
  </div>
        
  
  </>
};

export default Hero;
