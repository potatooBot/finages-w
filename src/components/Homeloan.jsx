import React from 'react'

import { apple, bill, emi, google,hl,homeicon, discount, carloan, rupicon, rupee, carloan2,hand,fee,pay,time, carloan3, caricon } from "../assets";
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
const Homeloan = () => {
  return (
    <>
   
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={hl} alt="billing" className="animate-fade-up animate-once w-[100%] h-[100%] relative z-[5] rounded-lg" />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
            <h4 className={`animate-fade-up animate-once font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[65.8px] w-full  text-black`}>
                What is Home Loan ?
            </h4>
            <p className={` ${styles.paragraph} animate-fade-up animate-once max-w-[470px] mt-5 text-black`}>

            A home loan is an amount an individual borrows from a financial institution such as a housing finance company to buy a new or a resale home, construct a home or renovate or extend an existing one.                
            </p>
    
            <button onClick={() => window.open("/ApplyLoans","_self")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                Apply for Home loan.
            </button>
        </div>

    </section>

    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <dh-component>
            <section className="max-w-8xl mx-auto container bg-gradient-to-r from-gray-100 to-gray-300 pt-16">
                <div>
                    <div role="contentinfo" className="flex items-center flex-col px-4">

                        <h3 tabIndex={0} className="font-poppins font-semibold xs:text-[48px] text-[40px]">What are the features of a Home loan?</h3>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Home loan amount</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">

                                Banks and NBFCs usually offer Home loans for amounts ranging from Rs 10,000 to Rs 40 lakh. However, the Home loan amount you are eligible for would primarily depend on your loan repayment capacity. Banks and NBFCs evaluate your repayment capacity primarily on the basis of your monthly disposable income.
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Home loan tenure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">When we talk about the maximum tenure for a home loan, it refers to the loan tenure or the duration at which you and the lender decide on the loan repayment. The loan is repaid through equated monthly instalments (EMI) and can spread to a maximum tenure of 30 years. </p>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Home loan interest rate</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Home loan interest rate is the percentage of the principal amount charged by the lender to the borrower for using the principal amount. The interest rate charged by banks and non-financial institutions determine the cost of your home loan.</p>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Home loan EMI</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A Home loan EMI calculator can help you accurately determine your EMIs. You just need to select the loan amount, rate of interest and tenure, to get the exact EMI payable for your Home loan.</p>
                             
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Processing fee</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">This is a one-time non-refundable fee that is to be paid to the home loan provider after the loan application has been approved. The processing charge varies depending on the bank and the loan scheme you are applying for. </p>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Prepayment/Preclosure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">  Prepayment penalty is the fee you will have to pay the lender if you plan on repaying your home loan before the completion of the loan tenure.</p>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Foreclosure</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A foreclosure is simply the closing of a Home Loan by paying off the entire amount borrowed in one lump sum amount. It is part of the regular Home Loan process and allows you to pay off the borrowed amount before the EMI schedule.</p>
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
                                <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Collateral</h4>
                                <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> A loan used to purchase or maintain a home,land or other types of real estate ,secured by property itself.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </dh-component>
        {/* Code block ends */}
    </div>
    
<div class="relative overflow-x-scroll shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <caption class=" font-poppins p-5 text-lg font-semibold text-left text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800">
    Fixed Interest Rates vs Floating Interest Rates – Which is better?
        {/* <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Expected Eligible Loan amount for Diifferent Salaries.</p> */}
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
<section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Types of Home Loan</h2>
            {/* <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Home loan</span> */}
            <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
                <span style={{color:"orange"}}> Home purchase loan: </span>
                Taken to purchase a home.
                </li>
                <li>
                <span style={{color:"orange"}}> Home improvement loan: </span>
                 Taken to repair/renovate a home.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Home construction loan:
                </span>  Taken to build a new house.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Land purchase loan: 
                </span>  Taken to buy a plot of land for constructing his/her own house.
                </li>
                <li>
                <span style={{color:"orange"}}> Home extension loan: </span>
                 Taken to add another floor. room, garage, bathroom, or kitchen, etc.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Joint home loan: 
                </span>  Taken by two or more people, for instance. spouses.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Home loan balance transfer 
                </span>  Taken to buy a plot of land for constructing his/her own house.
                </li>
                <li>
                <span style={{color:"orange"}}>
                Top-up home loan
                </span>   Allows you to borrow funds over and above the outstanding loan amount at nominal rates and for any purpose.
                </li>
          
            </ul>
        </div>
    </section>
    <div className="my-20 flex flex-col items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 animate-jump-in animate-once animate-delay-500">
        <img src={homeicon} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white "> Perfect Home Loan</span> <span className="  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

                for a Perfect Home. {" "}</span>
            {/* <span className="text-white">Goal</span> */}
        </p>
    </div>
    <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Eligibility Criteria for Home Loans</h2>
            <span className='my-2 text-black-600 font-poppins' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a Home loan</span>
            <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400 font-poppins" style={{ color: "#141414" }}>
                <li>
                Minimum Age: 18 years and Maximum Age: 70 years
                </li>
                <li>
                The applicant must be (any one):
Resident Indian,
Non-Resident India (NRI),
Person of Indian Origin (PIO).
                </li>
                <li>
                The applicant can be (any one):
Salaried,
Self-employed.
                </li>

                <li>
                At least Rs.5-6 lakh depending on the type of employment
                </li>
                <li>
                A good credit score of at least 750 or more obtained from a recognised credit bureau
                </li>
                <li>
               
               The applicant must have (any one):
A permanent residence,
A rented residence where he/she has resided for at least a year prior to applying for a loan.
                </li>
            </ul>
        </div>
    </section>

    <section id="CTA" className={` ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
        <div className="flex-2 flex flex-col">
            <h2 class=" font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>What are the documents required for a Home loan application?</h2>
            <span className="font-poppins">These are the most common documents requested by most banks to process your Home loan application:</span>
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
                    Address Proof
                </li>
                <li>
                Driving License
                </li>
                <li>
                TDS Certificate
                </li>
                <li>
                Self-attestation of borrowers on all documents
                </li>

             
            </ul>
        </div>
    </section>
    {/* <div class="relative overflow-x shadow-md sm:rounded-lg">
    <div>
    <h1 class="font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Home Loan – Overview</h1>
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
                    Chances of being approved for a Home Loan
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
                           
                    You may not qualify for a Home loan
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
    </div> */}
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div>
    <h1 class="my-10 font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Home Loan Interest Rates at Leading Banks</h1>
    </div>
    <table class="font-poppins w-full text-sm text-left text-gray-500 dark:text-gray-400 ">

<thead class="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Bank Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Home Loan Interest Rate
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      Axis Bank
                    </th>
                    <td class="px-6 py-4">
                           
                    8.75% p.a. onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Aditya Birla Finance
                    </th>
                    <td class="px-6 py-4">
                    7.00% onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Yes Bank
                    </th>
                    <td class="px-6 py-4">
                    9.40% to 10.25%
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    HDFC Bank
                    </th>
                    <td class="px-6 py-4">
                    8.60%* onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    IDFC FIRST Bank
                    </th>
                    <td class="px-6 py-4">
                    8.85% p.a onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Kotak Mahindra Bank
                    </th>
                    <td class="px-6 py-4">
                    8.85% p.a. to 9.40% p.a.
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    TATA Capital Finance 
                    </th>
                    <td class="px-6 py-4">
                    8.60%  onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ICICI Bank
                    </th>
                    <td class="px-6 py-4">
                    6.75% onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Bajaj Finserv
                    </th>
                    <td class="px-6 py-4">
                    8.50%* p.a onwards
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Finnable
                    </th>
                    <td class="px-6 py-4">
                    9.50%* p.a.
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    HDB Financial Services
                    </th>
                    <td class="px-6 py-4">
                    11%-20% p.a.
                    </td>
                </tr>

                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                       Indusland Bank
                    </th>
                    <td class="px-6 py-4">
                    8.40% - 9.75%
                    </td>
                </tr>
            </tbody>
        </table>
     
    </div>
    <div>
    <h1 class="font-poppins flex items-center justify-center mb-2 text-sm font-semibold text-gray-900 dark:text-white" style={{ color: "#14141" }}>*Interest Rate may vary depending on your Banks.</h1>
    </div>

    <Footer />
</>
  )
}

export default Homeloan
