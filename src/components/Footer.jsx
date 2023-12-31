import styles from "../style";
import { finages_logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={finages_logo}
          alt="Finages"
          className="w-[266px] h-[72.14px] object-contain"
        />
        {/* <p className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
          A new way to make the payments easy, reliable and secure.
        </p> */}
        <h2 className={`font-poppins font-normal text-[20px] leading-[30.8px] mt-4 max-w-[312px] text-black`}>
    19,Netaji Subhas Rd,Fairley Place,B.B.D Bagh,Kolkata,West Bengal,700001
      </h2>
        <h2 className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
        Contact : 9830116792
      </h2>
      <h2 className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
      contactus@finagesdistribution.com
      </h2>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-black">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.link}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimBlack hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  onClick={() => setActive(link.name)}
                >
                   <a href={`${link.link}`}>{link.name}</a>
                 
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Copyright Ⓒ 2023 Finages. All Rights Reserved.
      </p>
     

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;