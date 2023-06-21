import React from 'react'
import { apple, bill, emi, google, discount, carloan, rupicon, rupee, carloan2,hand,fee,pay,time, carloan3, caricon } from "../assets";
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
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
const Carloan = () => {
    return <>
        <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={carloan} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>

            <div className={layout.sectionInfo}>
                <h3 className={`${styles.heading2}  text-black`}>
                    What is Car Loan ?
                </h3>
                <p className={` ${styles.paragraph} max-w-[470px] mt-5 text-black`}>
                    A car loan is nothing but the funds that one borrows from a lender for the sole purpose of purchasing a car of his or her choice. Lenders like banks and Non-Banking Financial Companies (NBFCs) offer auto finance to consumers in the form of new and used car loans.
                </p>
                <a href="https://finages-emi.netlify.app">
                </a>
                <button onClick={() => window.open("/")} type="button" className={`py-4 my-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Apply for car loan.
                </button>
            </div>

        </section>

        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
            {/* Code block starts */}
            <dh-component>
                <section className="max-w-8xl mx-auto container bg-gradient-to-r from-gray-100 to-gray-300 pt-16">
                    <div>
                        <div role="contentinfo" className="flex items-center flex-col px-4">

                            <h3 tabIndex={0} className="font-poppins font-semibold xs:text-[48px] text-[40px]">What are the features of a car loan?</h3>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan amount</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">Banks offer a maximum car loan of up to 85-100% of the on-road price/ex-showroom price of the car. If you pay a high down-payment on your chosen car, then the cost of your car loan will be less.
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan tenure</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">You can opt for a short or long car loan tenure ranging from 1 to 7 years. A short loan tenure will ensure you repay your loan in a short period of time but will have high EMIs whereas a long tenure will have low EMIs but you will end up paying more in interest payments. </p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> In order to repay your car loan, you have to pay interest on the principal loan amount every month over the chosen loan tenure. The interest rate of a car loan will vary depending on the bank you choose. Visit a third-party website to compare various car loan offers across the top banks and choose one that offers the lowest interest rate.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan EMI</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Car loan is repaid to the bank in Equated Monthly Installments (EMIs). In order to get instant and accurate results of EMI calculation, use the online car loan EMI calculator that is available for free on the bank website or a reliable third-party website. 
                                        EMI calculation can help you find out how much your car loan will cost you monthly.</p>
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
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Banks charge a small percentage of the principal loan amount called the processing fee to process your car loan. The processing fee will be deducted at the time of disbursing the loan amount to your bank account. Some banks waiver the processing fee as a special offer.</p>
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
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Banks allow borrowers to prepay a part of the car loan after 12 EMI payments have been made. For making this prepayment, you will have to pay a penalty fee which is a percentage of the prepayment amount called the prepayment fee. You can also choose to pay the loan amount in full before the end of its loan tenure called preclosure.</p>
                                </div>
                            </div>
                            <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <img src={caricon} alt="drawer" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Foreclosure</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> As the car acts as a collateral in car loan, if you were to default on your car loan, your car will be repossessed by the bank and put up for auction to compensate for the outstanding dues. This procedure is called car loan foreclosure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </dh-component>
            {/* Code block ends */}
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
        <div className="flex flex-col items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 animate-jump-in animate-once animate-delay-500">
            <img src={caricon} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white ">Your Dream Car</span> <span className="  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

                    is Our {" "}</span>
                <span className="text-white">Goal</span>
            </p>
        </div>
        <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
            <div className="flex-2 flex flex-col">
                <h2 class="font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Eligibility Criteria for Car Loans</h2>
                <span className='my-2 text-black-600' >Though the eligibility criteria differ from bank to bank, these are the most common eligibility criteria required for a car loan</span>
                <ul class="my-2 w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "#141414" }}>

                    <li>
                        Should be aged between 18 years and 75 years
                    </li>
                    <li>
                        Should have a minimum net monthly income of Rs. 20,000
                    </li>


                    <li>
                        Must be a salaried or self-employed individual
                    </li>
                    <li>
                        Employment history of at least one year with current employement
                    </li>

                </ul>
            </div>
        </section>

        <section id="CTA" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`}>
            <div className="flex-2 flex flex-col">
                <h2 class=" font-poppins mb-2 text-lg font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>What are the documents required for a car loan application?</h2>
                <span>These are the most common documents requested by most banks to process your car loan application:</span>
                <ul class="w-lg space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400" style={{ color: "#141414" }}>

                    <li>
                        Application form
                    </li>
                    <li>
                        KYC documents
                    </li>


                    <li>
                        Photographs
                    </li>
                    <li>
                        Identity Proof
                    </li>
                    <li>
                        Address Proof
                    </li>
                    <li>
                        Bank Statements
                    </li>

                    <li>
                        Income Proof
                    </li>
                    <li>
                        Latest Salary Slip / Form 16
                    </li>
                    <li>
                        Income Tax returns of 2 previous financial years along with complete financial/audit report
                    </li>
                    <li>
                        Business Stability proof / Ownership proof
                    </li>
                    <li>
                        Employment Stability Proof
                    </li>
                    <li>
                        Partnership deed and Letter signed by all partners authorising one partner
                    </li>
                    <li>Companies and Societies: Resolution by Board of Directors (or such managing body)
                    </li>
                    <li>
                        Memorandum and Articles of Association
                    </li>
                </ul>
            </div>
        </section>
        <div class="relative overflow-x-scroll shadow-md sm:rounded-lg">
        <div>
        <h1 class="font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Car Loans – A Snapshot</h1>
        </div>
            <table class="overflow-x-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Features
                        </th>
                        <th scope="col" className="px-6 py-3">
                        New Car Loan
                        </th>
                        <th  class="px-6 py-3">
                        Used Car Loan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Interest rates
                        </th>
                        <td className="px-6 py-4">
                        7.25% - 14.00%
                        </td>
                        <td className="px-6 py-4">
                           	
 10.00% - 18.00%
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Loan tenure
                        </th>
                        <td className="px-6 py-4">
                        Up to 7 years
                        </td>
                        <td className="px-6 py-4">
                           	
	
                        Up to 5 years
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Processing fee
                        </th>
                        <td className="px-6 py-4">
                        Starting from 0.20% of the loan amount
                        </td>
                        <td className="px-6 py-4">
                           	
                        Up to 2% of the loan amount
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Loan amount
                        </th>
                        <td className="px-6 py-4">
                        Up to 100% of the ex-showroom price
                        </td>
                        <td className="px-6 py-4">
                           	
                        Up to 80% of the car’s valuation
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Prepayment charges
                        </th>
                        <td class="px-6 py-4">
                        	
0.5% - 5% on principal outstanding or interest outstanding for unexpired period of loan, whichever is lower
                        </td>
                    
                    </tr>

              
                </tbody>
            </table>
        </div>
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
        <h1 class="my-10 font-poppins flex items-center justify-center mb-2 text-xl font-semibold text-gray-900 dark:text-white" style={{ color: "#311b92" }}>Car Loan Interest Rates at Leading Banks</h1>
        </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Bank Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Car Loan Interest Rate
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                          Axis Bank
                        </th>
                        <td class="px-6 py-4">
                           	
8.50% - 11.25%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Aditya Birla Finance
                        </th>
                        <td class="px-6 py-4">
                        9.20%-11.25%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Yes Bank
                        </th>
                        <td class="px-6 py-4">
                        9.80% – 12.40%
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        HDFC Bank
                        </th>
                        <td class="px-6 py-4">
                        8.80% – 10.00%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        IDFC FIRST Bank
                        </th>
                        <td class="px-6 py-4">
                        9.0% to 10.5%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Kotak Mahindra Bank
                        </th>
                        <td class="px-6 py-4">
                        8.12% to 23.54%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        TATA Capital Finance 
                        </th>
                        <td class="px-6 py-4">
                        7.50%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        ICICI Bank
                        </th>
                        <td class="px-6 py-4">
                        8.82% - 12.75%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Bajaj Finserv
                        </th>
                        <td class="px-6 py-4">
                        10.50% to 22%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Finnable
                        </th>
                        <td class="px-6 py-4">
                        16 to 28%
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        HDB Financial Services
                        </th>
                        <td class="px-6 py-4">
                        8.00% to 26.00%
                        </td>
                    </tr>

                    <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                           Indusland Bank
                        </th>
                        <td class="px-6 py-4">
                        7% - 14%
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
}

export default Carloan
