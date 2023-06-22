import React from 'react'

import { apple, bill, emi, google,bu1, discount, carloan, businessloan, rupicon, rupee, carloan2,hand,fee,pay,time, carloan3, caricon } from "../assets";
import Footer from './Footer';
import CardDeal from './CardDeal';

import styles, { layout } from "../style";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
const Businessloan = () => {
  return (
    <>
   
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={businessloan} alt="billing" className="animate-fade-up animate-once w-[100%] h-[100%] relative z-[5] rounded-lg" />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
            <h4 className={`animate-fade-up animate-once font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[65.8px] w-full  text-black`}>
                What is Business Loan ?
            </h4>
            <p className={` ${styles.paragraph} animate-fade-up animate-once max-w-[470px] mt-5 text-black`}>

            A business loan is a financial instrument that can be used to cover both unexpected and anticipated expenses. A business loan is borrowed money that businesses use to cover costs they can't afford on their own in the short term.               
            </p>
    
            <button onClick={() => window.open("/ApplyLoans","_self")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                Apply for Business loan.
            </button>
        </div>

    </section>

    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <dh-component>
            <section className="max-w-8xl mx-auto container bg-gradient-to-r from-gray-100 to-gray-300 pt-16">
                <div>
                    <div role="contentinfo" className="flex items-center flex-col px-4">

                        <h3 tabIndex={0} className="font-poppins font-semibold xs:text-[48px] text-[40px]">What are the features of a Business loan?</h3>
                    </div>
                    <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={rupicon} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Business loan amount</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">

                                Indian banks offer business loans with varying loan amounts depending on several factors, including the borrower's financial strength, business requirements, and the bank's lending policies.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={time} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Business loan tenure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">The tenure, or duration, of a business loan can vary depending on the lender, the type of loan, and the specific terms and conditions agreed upon between the lender and the borrower. Typically, business loan tenures range from a few months to several years.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={hand} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Business loan interest rate</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Business Loan Interest Rates offered by Banks/NBFCs starts at 16% p.a. for the loan amount up to Rs. 2 crore that can be repaid with maximum repayment tenure of up to 5 years (may exceed as per business requirements). No collateral/security is required to be submitted by the applicants for the unsecured business loans offered up to Rs. 2 crore by the financial institutions.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={fee} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Business loan EMI</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A Business loan EMI calculator can help you accurately determine your EMIs. You just need to select the loan amount, rate of interest and tenure, to get the exact EMI payable for your Business loan.</p>
                             
                                {/* <h5 style={{color:"black"}}>EMI = [PxRX(1+R)^N]/[(1+R)^N-1], wherein P represents the loan amount, R is the interest rate charged per month, and N indicates the total number of monthly installments</h5> */}
                         <button onClick={() => window.open("https://finages-emi.netlify.app")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
               Calculate EMI
            </button>
                            </div>
                  
                        </div>
                 
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={rupicon} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Processing fee</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">This is a one-time non-refundable fee that is to be paid to the Business loan provider after the loan application has been approved. The processing charge is upto 6%. </p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={pay} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Prepayment/Preclosure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">  Prepayment penalty is the fee you will have to pay the lender if you plan on repaying your Business loan before the completion of the loan tenure.</p>
                            </div>
                        </div>
                        <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                            <div className="w-20 h-20 relative mr-5">
                                <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <img src={pay} alt="drawer" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Foreclosure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A foreclosure is simply the closing of a Business Loan by paying off the entire amount borrowed in one lump sum amount. It is part of the regular Business Loan process and allows you to pay off the borrowed amount before the EMI schedule.</p>
                            </div>
                        </div>
             
                    </div>
                </div>
            </section>
        </dh-component>
        {/* Code block ends */}
    </div>
    
{/* <div class="relative overflow-x-scroll shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <caption class=" font-poppins p-5 text-lg font-semibold text-left text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800">
    Fixed Interest Rates vs Floating Interest Rates – Which is better?
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Expected Eligible Loan amount for Diifferent Salaries.</p>
    </caption>
    <thead class="my-5 text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
            Fixed interest rate
            </th>
            <th scope="col" class="px-6 py-3">
            Floating interest rate
            </th>
       
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Interest rates remain constant
            </th>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Interest rate can change depending on the fluctuation in the market
            </td>
  
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Your EMI payable will remain the same throughout the repayment tenure
            </th>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Your EMI payable is likely to change during the repayment tenure.
            </td>
  
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            You are likely to be charged a prepayment charge if you prepay your loan
            </th>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            You may not be charged a prepayment charge if you prepay your loan
            </td>
  
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Not linked to MCLR
            </th>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Linked to MCLR
            </td>
  
        </tr>
    </tbody>
</table>
</div> */}

    {/* <section className={layout.section} id="EMI">
<div className={layout.sectionInfo}>
  <h2 className={`${styles.heading2} text-transparent text-black`}>
  Who is  <span style={{color: 'blue'}}>Eligible</span>{' '}  <br className="sm:block hidden" /> for Car Loan ?
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
  Any individual aged 21 to 65 years with a good credit score
and a steady income can apply for a car loan. Whether you
are a salaried individual or a self-employed person, the
minimum annual income requirement of an applicant is
Rs.2 lakh. The applicant should have at the least 2 years of
work experience in the same profession. In other words,
the individual must hold down a job in the same field for
minimum 2 years.
  </p>

 
  <a href="https://finages-emi.netlify.app">


</a>
</div>

<div className={layout.sectionImg}>
  <img src={carloan2} alt="billing" className="w-[80%] h-[80%]  rounded-lg" />
</div>
</section> */}
<section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Types of Business Loan</h2>
            {/* <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Business loan</span> */}
            <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
                <span style={{color:"orange"}}>Working Capital Loan </span>
                Working capital loans are used by individuals, entrepreneurs, startups, and MSMEs to meet their daily business requirements and for various business expansion services, enhancing business cash flow, purchasing raw materials, addition in inventory/stock, paying salaries, hiring staff, etc.
                </li>
                <li>
                <span style={{color:"orange"}}> Term Loan (Short & Long-term Loan) </span>
                Term loan is a loan that is required to be repaid in regular payments over a set period of time. The term loan is categorized into short-term, intermediate-term and long-term loans.
                </li>
                <li>
                <span style={{color:"orange"}}>
               Letter of Credit  </span>  
                Letter of credit is a type of credit limit used majorly in trading businesses in which the bank or lender offers a funding guarantee to enterprises that deal in international trade. Letter of credit can be utilized for both import and export purposes by entrepreneurs. 
                </li>
                <li>
                <span style={{color:"orange"}}>
                Loans under Govt. Schemes
                </span>  The Government of India has initiated various loan schemes for individuals, MSMEs, women entrepreneurs, and other entities engaged in trading, services, and manufacturing sectors. The loans under government schemes are offered by various financial institutions, such as Private and Public Sector Banks, NBFCs, Regional Rural Banks (RRBs), Micro Finance Institutions (MFIs), Small Finance Banks (SFBs), etc.
                </li>
                <li>
                <span style={{color:"orange"}}> Bill Discounting: </span>
                Bill or Invoice Discounting is a funding facility in which the seller gets an amount in advance at discounted rates from the lender.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Equipment Finance or Machinery Loan
                </span>  Taken by two or more people, for instance. spouses.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Point-of-Sale (POS) Loans :
                </span> POS Loans or Merchant Cash Advance is a mechanism in which a business owner running an enterprise pays a lump sum amount in advance to suppliers through his/her daily or future credit or debit card transactions. Several times, merchants of SMEs experience a short-term cash crunch.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Overdraft Facility
                </span>   Overdraft facility is a funding type offered by a bank to its account holder to withdraw cash from his/her account even if the account balance is zero.
                </li>
          
            </ul>
        </div>
    </section>
    <div className="my-20 flex flex-col items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 animate-jump-in animate-once animate-delay-500">
        <img src={bu1} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white "> Start your dream</span> <span className="  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

            Business with us. {" "}</span>
            {/* <span className="text-white">Goal</span> */}
        </p>
    </div>
    <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Eligibility Criteria for Business Loans</h2>
            <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Business loan</span>
            <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
                The business should be operating for at least two years at the time of applying for a loan.
                </li>
                <li>
                Self-employed people, professionals such as doctors and CAs, and proprietorship concerns can also apply.
                </li>
                <li>
                Charitable organisations, NGOs, and trusts are not eligible for a business loan.
                </li>

                <li>
                The applicant should have a credit score, or CIBIL, score of 675 and above.
                </li>
                <li>
                The business should not fall under any list of blacklisted businesses.
                </li>
                <li>
               
                The office location should not be on any negative list.
                </li>
            </ul>
        </div>
    </section>

    <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class=" font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>What are the documents required for a Business loan application?</h2>
            <span className="font-poppins">These are the most common documents requested by most banks to process your Business loan application:</span>
            <ul class=" font-poppins w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "#141414" }}>

                <li>
                Duly filled application form
                </li>
                <li>
                    KYC documents
                </li>
                <li>
                Income Tax Returns for the last 3 years	Salary Slips for the last three months
                </li>
                <li>
                Signed copy of standard terms (term loan facility)
                </li>
                <li>
                GST Registration.
                </li>
                <li>
                Proof of business registration
                </li>
                <li>
                Deed copy and company PAN Card copy in the case of partnerships
                </li>
                <li>
                Additional document(s) may be required for credit assessment and processing of loan request
                </li>

             
            </ul>
        </div>
    </section>
   
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div>
    <h1 className="my-10 font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Business Loan Interest Rates at Leading Banks</h1>
    </div>
    <table className="font-poppins w-full text-sm text-left text-gray-500 dark:text-gray-400 ">

<thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Bank Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Business Loan Interest Rate
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Axis Bank
                    </th>
                    <td className="px-6 py-4">
                           
                    14.95%-19.20 p.a.
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Aditya Birla Finance
                    </th>
                    <td className="px-6 py-4">
                    13%- 16% p.a .
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Yes Bank
                    </th>
                    <td className="px-6 py-4">
                    13.40% to 16.25%
                    </td>
                </tr>

                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    HDFC Bank
                    </th>
                    <td className="px-6 py-4">
                    10%- 16.25% p.a
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    IDFC FIRST Bank
                    </th>
                    <td className="px-6 py-4">
                    10.50% p.a onwards
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Kotak Mahindra Bank
                    </th>
                    <td className="px-6 py-4">
                    16% p.a. to 26% p.a.
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    TATA Capital Finance 
                    </th>
                    <td className="px-6 py-4">
                    15%  onwards
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ICICI Bank
                    </th>
                    <td className="px-6 py-4">
                    18% p.a
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Bajaj Finserv
                    </th>
                    <td className="px-6 py-4">
                    9.75% p.a. to 30% p.a.
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Finnable
                    </th>
                    <td className="px-6 py-4">
                    9.50%* p.a.
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    HDB Financial Services
                    </th>
                    <td className="px-6 py-4">
                    Upto 36%
                    </td>
                </tr>

                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                       Indusland Bank
                    </th>
                    <td className="px-6 py-4">
                    13% to 22%
                    </td>
                </tr>
            </tbody>
        </table>
     
    </div>
    <div>
    <h1 className="font-poppins flex items-center justify-center mb-2 text-sm font-semibold text-gray-900 dark:text-white" style={{ color: "#14141" }}>*Interest Rate may vary depending on your Banks.</h1>
    </div>

    <Footer />
</>
  )
}

export default Businessloan
