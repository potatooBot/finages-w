
import React from 'react'
import { apple, bill, emi, google,pl1, discount, carloan, rupicon, rupee, carloan2,hand,fee,pay,time, carloan3, caricon } from "../assets";
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
const Personalloan = () => {
  return (
  <>
   
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={pl1} alt="billing" className="animate-fade-up animate-once w-[100%] h-[100%] relative z-[5] rounded-lg" />

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>

            <div className={layout.sectionInfo}>
                <h4 className={`animate-fade-up animate-once font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[65.8px] w-full  text-black`}>
                    What is Personal Loan ?
                </h4>
                <p className={` ${styles.paragraph} animate-fade-up animate-once max-w-[470px] mt-5 text-black`}>
                    
A personal loan is a type of loan that individuals can borrow from a bank, credit union, or online lender for personal use. Unlike specific-purpose loans (such as auto loans or mortgages), personal loans can be used for a variety of purposes, such as debt consolidation, home improvements, medical expenses, vacations, or unexpected expenses.
                </p>
        
                <button onClick={() => window.open("/ApplyLoans","_self")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Apply for Personal loan.
                </button>
            </div>

        </section>

        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
            {/* Code block starts */}
            <dh-component>
                <section className="max-w-8xl mx-auto container bg-gradient-to-r from-gray-100 to-gray-300 pt-16">
                    <div>
                        <div role="contentinfo" className="flex items-center flex-col px-4">

                            <h3 tabIndex={0} className="font-poppins font-semibold xs:text-[48px] text-[40px]">What are the features of a Personal loan?</h3>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Personal loan amount</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">

                                    Banks and NBFCs usually offer personal loans for amounts ranging from Rs 10,000 to Rs 40 lakh. However, the personal loan amount you are eligible for would primarily depend on your loan repayment capacity. Banks and NBFCs evaluate your repayment capacity primarily on the basis of your monthly disposable income.
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Personal loan tenure</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">Generally, a loan tenure ranges from 12 months to 60 months. However, nowadays, many experienced and reputed lenders offer borrowers the choice of closing a loan in 3 months. Your loan tenure should depend on where you personally stand financially. A higher income can help you close a loan in a short tenure. </p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Personal loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> The personal loan interest rates range between 8.75% p.a. and 49.5% p.a. Depending on the loan amount availed by you, your credit score, and repayment tenure, the rate of interest on your loan is decided. If you maintain a high credit score and have a good relationship with the bank, then the interest rate on your personal loan can be lowered.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800">  Personal loan EMI</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A personal loan EMI calculator can help you accurately determine your EMIs. You just need to select the loan amount, rate of interest and tenure, to get the exact EMI payable for your personal loan.</p>
                                 
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
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Loan providers levy a one-time charge known as the processing fee, which can increase the cost of the loan. Even if you are charged a low interest, it is important to check and compare the processing fee charged by different lenders.</p>
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
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Certain banks may charge you a pre-closure fee if you repay the outstanding loan balance before the completion of the loan repayment tenure. Make sure to check if the bank/financial institution that you are applying to levies a pre-closure charge.</p>
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
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> You Can foreclose your personal loan after 3 months.Loan foreclosure is the full repayment of your remaining loan amount in one single payment instead of paying multiple EMIs. If you have surplus funds that you would like to use to repay your ongoing personal loan, you can opt for the personal loan foreclosure facility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </dh-component>
            {/* Code block ends */}
        </div>
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class=" font-poppins p-5 text-lg font-semibold text-left text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800">
          Personal Loan Eligible Amount.
            {/* <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Expected Eligible Loan amount for Diifferent Salaries.</p> */}
        </caption>
        <thead class="my-5 text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Monthly Salary
                </th>
                <th scope="col" class="px-6 py-3">
                    Loan amount
                </th>
           
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    RS. 70,000
                </th>
                <td class="px-6 py-4">
                    Rs.13 Lakhs to Rs. 16.20 Lakhs
                </td>
      
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    RS. 80,000
                </th>
                <td class="px-6 py-4">
                Rs.16 Lakhs to Rs. 19 Lakhs
                </td>
      
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    RS. 90,000
                </th>
                <td class="px-6 py-4">
                Rs.19 Lakhs to Rs. 20 Lakhs
                </td>
      
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    RS. 1,00,000
                </th>
                <td class="px-6 py-4">
                Rs.20 Lakhs to Rs. 23 Lakhs
                </td>
      
            </tr>
        </tbody>
    </table>
    <div>
        <h1 class="font-poppins flex items-center justify-center mb-2 text-sm font-semibold text-gray-900 dark:text-white" style={{ color: "#14141" }}>*Interest Rate may vary depending on your Credit score and Banks</h1>
        </div>
</div>

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

        <div className="my-20 flex flex-col items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 animate-jump-in animate-once animate-delay-500">
            <img src={pay} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white ">Personal Loan</span> <span className="  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

                    at Fingertips. {" "}</span>
                {/* <span className="text-white">Goal</span> */}
            </p>
        </div>
        <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
            <div className="flex-2 flex flex-col">
                <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Eligibility Criteria for Personal Loans</h2>
                <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Personal loan</span>
                <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                    <li>
                        Should be aged between 21 – 68 years.
                    </li>
                    <li>
                    Salaried, Business owner, Self-employed professional, Retired, Student & Home maker
                    </li>
                    <li>
                    Employment Status	Employed/In-business for at least 2 – 5 years.
                    </li>

                    <li>
                    Work Experience	1 to 3 years & Above
                    </li>
                    <li>
                    Minimum Net Monthly Income:Rs.5,000 and above
                    </li>
                    <li>
                    Maximum EMI	Up to 65% of Income
                    </li>
                </ul>
            </div>
        </section>

        <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
            <div className="flex-2 flex flex-col">
                <h2 class=" font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>What are the documents required for a Personal loan application?</h2>
                <span className="font-poppins">These are the most common documents requested by most banks to process your Personal loan application:</span>
                <ul class=" font-poppins w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "#141414" }}>

                    <li>
                    Duly filled application form
                    </li>
                    <li>
                        KYC documents
                    </li>
                    <li>
                    Date of Birth Proof
                    </li>
                    <li>
                    Latest 2 months pay slip
                    </li>
                    <li>
                        Address Proof
                    </li>
                    <li>
                        Photograph
                    </li>
                    <li>
                    Self-attestation of borrowers on all documents
                    </li>

                 
                </ul>
            </div>
        </section>
        <div class="relative overflow-x shadow-md sm:rounded-lg">
        <div>
        <h1 class="font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Personal Loan – Overview</h1>
        </div>
            <table class=" overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400 ">

                <thead class="font-poppins text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        CIBIL Ratings
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Credit Score
                        </th>
                        <th  class="px-6 py-3">
                        Chances of being approved for a Personal Loan
                        </th>
                    </tr>
                </thead>
                <tbody className="font-poppins">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Poor
                        </th>
                        <td className="px-6 py-4">
                        Less than 600
                        </td>
                        <td className="px-6 py-4">
                           	
                        You may not qualify for a personal loan
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Average
                        </th>
                        <td className="px-6 py-4">
                        Between 600 and 750
                        </td>
                        <td className="px-6 py-4">
                           	
                        Loan may be approved, but at a high interest rate
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Good
                        </th>
                        <td className="px-6 py-4">
                        Over 750
                        </td>
                        <td className="px-6 py-4">
                    	Loan is likely to be approved with a lower interest rate
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Excellent
                        </th>
                        <td className="px-6 py-4">
                        Between 800 and 900
                        </td>
                        <td className="px-6 py-4">
                           	
                        Loan with a low interest rate, faster approval, larger loan amount
                        </td>
                    </tr>

              
                </tbody>
            </table>
        </div>
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
        <h1 class="my-10 font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Personal Loan Interest Rates at Leading Banks</h1>
        </div>
        <table class="font-poppins w-full text-sm text-left text-gray-500 dark:text-gray-400 ">

<thead class="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Bank Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Personal Loan Interest Rate
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Axis Bank
                        </th>
                        <td class="px-6 py-4">
                           	
                        12% p.a.- 21% p.a.
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Aditya Birla Finance
                        </th>
                        <td class="px-6 py-4">
                        14% p.a. -26% p.a.
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Yes Bank
                        </th>
                        <td class="px-6 py-4">
                        10% p.a. onwards - 24% p.a.
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        HDFC Bank
                        </th>
                        <td class="px-6 py-4">
                        10.5% p.a. - 21.00% p.a.
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        IDFC FIRST Bank
                        </th>
                        <td class="px-6 py-4">
                        10.49% p.a. onwards
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Kotak Mahindra Bank
                        </th>
                        <td class="px-6 py-4">
                        10.99% and above
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        TATA Capital Finance 
                        </th>
                        <td class="px-6 py-4">
                        10.99% onwards
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        ICICI Bank
                        </th>
                        <td class="px-6 py-4">
                        10.75% p.a. - 19.00% p.a.
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Bajaj Finserv
                        </th>
                        <td class="px-6 py-4">
                        7.77% p.a. onwards
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Finnable
                        </th>
                        <td class="px-6 py-4">
                        16.99% to 28.99%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        HDB Financial Services
                        </th>
                        <td class="px-6 py-4">
                        12.00% to 31.00%
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                           IndusInd Bank
                        </th>
                        <td class="px-6 py-4">
                        10.49% p.a. - 26.5% p.a.
                        </td>
                    </tr>
                </tbody>
            </table>
         
        </div>
        <div>
        <h1 class="font-poppins flex items-center justify-center mb-2 text-sm font-semibold text-gray-900 dark:text-white" style={{ color: "#14141" }}>*Interest Rate may vary depending on your Credit score.</h1>
        </div>

        <Footer />
    </>

  )
}

export default Personalloan;
