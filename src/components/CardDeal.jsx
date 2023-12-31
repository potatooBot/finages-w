import { card,rupee } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="EMI">
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
       Check EMI with our  <span style={{color: 'black'}}>EMI Calculator</span>{' '}  <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      
Our EMI (Equated Monthly Installment) calculator is a powerful tool that takes the complexity out of financial planning. With just a few simple inputs, it provides you with instant calculations of your monthly installment payments for loans or financing. 
      </p>
      <a href="https://finages-emi.netlify.app">

<button onClick={() => { window.open("https://finages-emi.netlify.app","_self") } } type="button" className={`my -5 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
Calculate
</button>
</a>
    </div>

    <div className={layout.sectionImg}>
      <img src={rupee} alt="billing" className="w-[80%] h-[80%] animate-bounce animate-infinite animate-duration-[2000ms]" />
    </div>
  </section>
);

export default CardDeal;
