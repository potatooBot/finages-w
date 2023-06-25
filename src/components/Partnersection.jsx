import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./casousel.css";
import styles from "../style";
import { stats2 } from "../constants";
import { layout } from "../style";
import Button from "./Button";
import {sbi ,edel,bajaj,idfcfirstbank,magma,indibulls,iifl,trustus,fullerton,pnbhouse,scb,rbl,avanese,safety,yescard,clock,kotak,icicicard,bajajfinserv,hdfcard,indusland,idfc,tatacapital,adityacard,yes_bank, cardsection, hdfc, indus, axis, bandhan, future, aubank, aditya, icici, pirama, religare, vistara, neogrowth, hinduja, dmi, mahindra, incred, indostar} from "../assets";
import Footer from "./Footer";
import Stats from "./Stats";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
const sliderImageUrl = [
    {
        url:
    iifl
      },
    {
        url:
        rbl
      },
  //First image url
  {
    url:
     icici
  },
  {
    url:
  aditya
  },
  {
    url:
 yes_bank
  },
  //Second image url
  {
    url:
scb
  },
  //Third image url
  {
    url:
 future
  },
  {
    url:
pirama
  },
  {
    url:
    bandhan
  },

  

  {
    url:
    hdfc
  },
  //Fourth image url
  {
    url:
 aubank
  },
  {
    url:
     axis
  },
  {
    url:
    aditya
  },
  {
    url:
    indus
  },
  {
    url:
    yes_bank
  },
  {
    url:
    sbi

  },
  {
    url:
    avanese
  },
  {
    url:
    pnbhouse
  },
  {
    url:
 bajaj
  },
  {
    url:
idfcfirstbank
  },
  {
    url:
fullerton
  },
  {
    url:
edel
  },
  {
    url:
indibulls
  },
  {
    url:
magma
  },
  {
    url:
religare
  },
  {
    url:
vistara
  },
  {
    url:
neogrowth
  },
  {
    url:
hinduja,
  },
  {
    url:
dmi
  },
  {
    url:
mahindra
  },
  {
    url:
incred
  },
  {
    url:
indostar
  },
];
const Partnersection = () => {

  return <>

  <div id="part" className="parent">
  
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className=" text-black slider max-w-xs transition duration-200 ease-in-out hover:scale-110 " key={index}>
     

             <img  src={imageUrl.url} alt="partners" />
            
         
              <div class="flex justify-center">
        
                </div>
          
            </div>
          );
        })}
      </Carousel>
    </div>


    </>
};
export default Partnersection ;
