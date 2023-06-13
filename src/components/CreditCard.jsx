import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./casousel.css";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
import { axis_cred_card,sbi,sbi_card } from "../assets";
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
     sbi_card
  },
  {
    url:
     sbi_card
  },
  //Second image url
  {
    url:
      sbi_card
  },
  //Third image url
  {
    url:
     axis_cred_card
  },

  //Fourth image url

  {
    url:
      sbi_card
  }
];
const CreditCard = () => {

  return <>
    <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Credit Card Services
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      As of today, credit cards are critical tools that empower a person to acquire goods,
      and avail of services with the comfort of making payments for those purchases on another date.


    </p>
    <a href="https://finages-emi.netlify.app">
    </a>
  </div><div id="Credit" className="parent">

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
            <div className="slider max-w-xs transition duration-300 ease-in-out hover:scale-110 animate-jump-in animate-infinite animate-duration-[5000ms]" key={index}>
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
