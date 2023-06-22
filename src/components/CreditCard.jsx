import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./casousel.css";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
import { axis_cred_card,sbi,sbi_card ,kotak,icicicard,bajajfinserv,hdfcard,indusland,idfc,tatacapital,adityacard,yes_bank} from "../assets";
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
yes_bank
  },
  //Fourth image url


];
const CreditCard = () => {

  return <>
  
    <div className={layout.sectionInfo}>
    
    <h2 className={`${styles.heading2} text-black`}>
      Credit Card Services
    </h2>
    <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]  mt-5 text-black`}>
      As of today, credit cards are critical tools that empower a person to acquire goods,
      and avail of services with the comfort of making payments for those purchases on another date.


    </p>
    <a href="https://finages-emi.netlify.app">
    </a>
  </div>
  <div id="Credit" className="parent">
  <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class="font-poppins mb-2 text-lg font-bold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Types of Credit Crads</h2>
            {/* <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Home loan</span> */}
            <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
              
                Travel Credit Card
                </li>
                <li>
                Fuel Credit Card
              </li>

              <li>
              Reward Credit Card
              </li>
              <li>
              Secured Credit Card
              </li>
              <li>
              Shopping Credit Card
              </li>
              
          
            </ul>
        </div>
    </section>
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
    <Footer/>
    </>
};
export default CreditCard;
