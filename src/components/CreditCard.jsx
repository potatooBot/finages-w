import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./casousel.css";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
import { axis_cred_card,sbi,sbi_card ,trustus,safety,yescard,clock,kotak,icicicard,bajajfinserv,hdfcard,indusland,idfc,tatacapital,adityacard,yes_bank, cardsection} from "../assets";
import Footer from "./Footer";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const sliderImageUrl = [
  //First image url
  {
    url:
     kotak
  },
  {
    url:
    icicicard
  },
  //Second image url
  {
    url:
      bajajfinserv
  },
  //Third image url
  {
    url:
     axis_cred_card
  },
  {
    url:
     hdfcard
  },
  {
    url:
     indusland
  },
  {
    url:
    idfc
  },
  {
    url:
tatacapital
  },
  {
    url:
adityacard
  },
  {
    url:
yescard
  },
  //Fourth image url


];
const CreditCard = () => {

  return <>
  
    <div className={layout.sectionInfo}>
    
    <h2 className={`${styles.heading2} text-black`}>
      Credit Card
    </h2>
    <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  mt-5 text-black`}>
      As of today, credit cards are critical tools that empower a person to acquire goods,
      and avail of services with the comfort of making payments for those purchases on another date.


    </p>
    <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h3 className="font-poppins font-semibold xs:text-[48px] text-[30px]" style={{color: 'Blue'}}>  Benefits of  <span style={{color: 'Blue'}}>Credit</span>{' '} Card </h3>
      <div className="flex-2 flex flex-col">
            {/* <h2 class="font-poppins mb-2 text-lg font-bold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Types of Credit Crads</h2> */}
            {/* <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Home loan</span> */}
            <ul class=" my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
              
                <span className="text-bold">
                Easy access to credit
                </span> 
                </li>
                <li>
                Building a line of credit
              </li>

              <li>
              EMI facility
              </li>
              <li>
              Incentives and offers
              </li>
              <li>
              Flexible credit
              </li>
              <li>
              Record of expenses
              </li>
              <li>
              Purchase protection
              </li>
          
            </ul>
        </div>
    </div>

   


    <div className={layout.sectionImg}>
      <img src={cardsection} alt="billing" className="w-[80%] h-[80%] animate-bounce animate-rotate-y rounded-lg rounded-3xl " />
    </div>
  </section>
    <a href="https://finages-emi.netlify.app">
    </a>
  </div>
  <h2 className={ `${styles.heading2} flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
     Credit Card Types.
      </h2>
  <div class="container my-2 m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
  
  <div>
    <div class=" myx-2 flex flex-col lg:flex-row rounded overflow-hidden h-auto  border shadow shadow-lg rounded-3xl ">
    
      <div class="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight justify-center w-full">
        <h1>Travel credit cards</h1>
        </div>
   
      </div>
    </div>
  </div>
  

  <div>

  </div>
  <div>
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto  border shadow shadow-lg rounded-3xl ">
    
      <div class="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight justify-center w-full">
        <h1>Student credit cards</h1>
        </div>
   
      </div>
    </div>
  </div>
  <div>
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto  border shadow shadow-lg rounded-3xl ">
    
      <div class="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight justify-center w-full">
        <h1>Fuel credit cards</h1>
        </div>
   
      </div>
    </div>
  </div>

  <div>
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto  border shadow shadow-lg rounded-3xl ">
    
      <div class="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight justify-center w-full">
        <h1>   Shopping Credit Card</h1>
        </div>
   
      </div>
    </div>
  </div>
  <div>
    <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto  border shadow shadow-lg rounded-3xl ">
    
      <div class="backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="text-black font-bold text-xl mb-2 leading-tight justify-center w-full">
        <h1> Reward Credit Card</h1>
        </div>
   
      </div>
    </div>
  </div>

  <div>

  </div>


  

</div>

  <div id="Credit" className="parent">
  
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className=" text-black slider max-w-xs transition duration-100 ease-in-out hover:scale-110 animate-jump-in animate-once animate-duration-[5000ms]" key={index}>
             <a href="/Contact">

             <img  src={imageUrl.url} alt="movie" />
             </a>
              <a href="/Contact">
              <div class="flex justify-center">
                <button key={index} type="button" className={` my-10 slider py-4 px-5  font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                  Apply
                </button>
                </div>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
    <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h3 className="font-poppins font-semibold xs:text-[48px] text-[30px]" style={{color: 'Black'}}> When  <span style={{color: 'Blue'}}>Not to</span>{' '}  Use a  Credit Card </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{color: 'Black'}}>
      Paying with credit cards isn't always better than paying with cash. Retailers honor credit cards because they want to make it easy for you to shop there. But the merchants still have to pay the major credit card companies a portion of every sale in the form of a transaction fee. Since a cash sale means more to the retailer's bottom line than an equivalent credit sale, some retailers give discounts for the privilege of immediately taking your cash. On a big item, like a furniture set, for instance, the difference could be substantial.
      </p>
    </div>

   


    <div className={layout.sectionImg}>
      <img src={clock} alt="billing" className="w-[80%] h-[80%] animate-bounce animate-wiggle animate-infinite rounded-lg" />
    </div>
  </section>
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={safety} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    {/* <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}> */}
        <div className="flex-2 flex flex-col">
            <h2 class=" font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Few Amazing Tips For Your Credit Card Safety?</h2>

            <ul class=" font-poppins w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "#141414" }}>

                <li>
                Only Use Credit Card On Trusted Websites
                </li>
                <li>
                Set Up A Strong Password
                </li>
                <li>
                Never Shop In Public.
                </li>
                <li>
                If a website or link appears shady or suspicious, don’t click or use it.
                </li>
                <li>
                Beware of public Wi-Fi:
                </li>
                <li>
                Get a card protection plan
                </li>
                <li>
                Remember ‘S’ is for secure
                </li>
<li>
Keep your account number private
</li>
<li>
Protect yourself online.
</li>
<li>
Practice credit card protection . Sign the back of a new card upon receipt.
</li>
             
            </ul>
        </div>
  </section>
    <Footer/>
    </>
};
export default CreditCard;
