import React from 'react'
import { apple, bill, emi, google, carloan, rupicon } from "../assets";
import Footer from './Footer';

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
                                        <img src={rupicon} alt="drawer" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan tenure</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 ">You can opt for a short or long car loan tenure ranging from 1 to 7 years. A short loan tenure will ensure you repay your loan in a short period of time but will have high EMIs whereas a long tenure will have low EMIs but you will end up paying more in interest payments. It is advisable to use an online car loan EMI calculator tool to choose a suitable car loan tenure so that you can save up on interest payments.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> In order to repay your car loan, you have to pay interest on the principal loan amount every month over the chosen loan tenure. The interest rate of a car loan will vary depending on the bank you choose. Visit a third-party website to compare various car loan offers across the top banks and choose one that offers the lowest interest rate.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan EMI</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> Car loan is repaid to the bank in Equated Monthly Installments (EMIs). In order to get instant and accurate results of EMI calculation, use the online car loan EMI calculator that is available for free on the bank website or a reliable third-party website. The tool is easy to use - all you have to do is enter the loan amount, interest rate, loan tenure, and processing fee into the calculator and click on the 'Calculate' button. You will get a periodical loan repayment schedule in the form of an amortisation table. The table will consist of your EMIs, outstanding due after each EMI payment, interest payments, etc.
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> In order to repay your car loan, you have to pay interest on the principal loan amount every month over the chosen loan tenure. The interest rate of a car loan will vary depending on the bank you choose. Visit a third-party website to compare various car loan offers across the top banks and choose one that offers the lowest interest rate.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> In order to repay your car loan, you have to pay interest on the principal loan amount every month over the chosen loan tenure. The interest rate of a car loan will vary depending on the bank you choose. Visit a third-party website to compare various car loan offers across the top banks and choose one that offers the lowest interest rate.</p>
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
                                    <h4 tabIndex={0} className=" focus:outline-none text-xl font-bold leading-tight text-gray-800"> &#8226; Car loan interest rate</h4>
                                    <p tabIndex={0} className="font-poppins font-normal text-dimBlack text-[18px] leading-[30.8px] pt-2 "> In order to repay your car loan, you have to pay interest on the principal loan amount every month over the chosen loan tenure. The interest rate of a car loan will vary depending on the bank you choose. Visit a third-party website to compare various car loan offers across the top banks and choose one that offers the lowest interest rate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </dh-component>
            {/* Code block ends */}
        </div>
        <Footer/>
    </>
}

export default Carloan
