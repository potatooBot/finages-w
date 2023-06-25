import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { stats } from "../constants";
import Stats from "./Stats";
import Business from "./Business";
import { stats3 } from "../constants";
import { layout } from "../style";
import CTA from "./CTA";
import Footer from "./Footer";
import CardDeal from "./CardDeal";
import Testimonials from "./Testimonials";
import Clients from "./Clients";
import Billing from "./Billing";
import Contact from "./Contact";
import CreditCard from "./CreditCard";
import Partnersection from "./Partnersection";
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
          Turning your <br className="sm:block hidden" />{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> dreams</span>{" "}
          </h1>
      
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] w-full">
        into reality .
        </h1>
     
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg  aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>
    <blockquote>
        <h2 class="text-3xl font-semibold font-poppins text-gray-900 dark:text-white">About Us</h2>
    </blockquote>
    <figcaption class="flex items-center mt-6 space-x-3">
  
    </figcaption>
</figure>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Finages helps partners to find the best financial products most suited to their customers’ needs. 
From application to disbursal Finages will accompany you at each step, till the disbursal of loan or issuance of credit card. The expertise we have gained by being in the business for over more than a decade enables us to identify the best loan for your needs.
        </p>
      </div>

      <div  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img  style={{zIndex:0}} src={robot} alt="billing" className=" animate-pulse animate-once animate-delay-500 w-[100%] h-[100%] relative" />

   
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
       <hr class="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats3.map((stat) => (
      <div key={stat.id} className={`flex-2 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-black uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
  <hr class="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

   
       <h2 className={ `${styles.heading2} flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
      Our Partners
      </h2>
       {/* <Clients/> */}
       <Partnersection/>
       <Reach/>
       <hr class="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700"></hr>



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
