import { apple, bill,emi, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={emi} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
      Loan with ease  <br className="sm:block hidden" />guaranteed with Finaages! 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      Unlock the door to financial flexibility with easy access to credit card loans and a wide range of loan options tailored to your needs.
      </p>
   
      <button onClick={() => window.open("/Contact","_self")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
              Contact Us
            </button>




    </div>
    

  </section>
);

export default Billing;
