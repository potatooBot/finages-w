import { useState } from "react";

import { close, menu, finages_logo } from "../assets";
import { navLinks,navLinks2 } from "../constants";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);



  return <>


    <nav className=" w-full flex py-10 justify-between items-center boreder-none " style={{zIndex:9999}}>
    <a href="/">

    
      <img src={finages_logo} alt="Finages" className="w-[200px] h-[60px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-100 " style={{zIndex:9999}}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              active === nav.title=="Home" ? "text-black" : "text-dimBlack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        )
        )
      
        }
        <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 55 },
        
      }}
    className="z-100"
    style={{zIndex:9999}}
    >
      <MenuHandler  >
        <span className="text-black font-poppins font-medium cursor-pointer text-[16px] mx-10" >Loans</span>
      </MenuHandler>
      <MenuList  style={{zIndex:9999}}>
        <MenuItem onClick={() => window.open("/Carloan","_self")}   style={{zIndex:9999}} className="text-black font-poppins font-medium cursor-pointer text-[16px] my-2" >Car Loan</MenuItem>
        <MenuItem onClick={() => window.open("/Personalloan","_self")}  style={{zIndex:9999}}   className="text-black font-poppins font-medium cursor-pointer text-[16px] my-2"  >Personal  Loan</MenuItem>
        <MenuItem onClick={() => window.open("/Homeloan","_self")}   style={{zIndex:9999}} className="text-black font-poppins font-medium cursor-pointer text-[16px] my-2"  >Home Loan</MenuItem>
        <MenuItem onClick={() => window.open("/Businessloan","_self")}  style={{zIndex:99999}}  className="text-black font-poppins font-medium cursor-pointer text-[16px] my-2" >Business Loan</MenuItem>
        {/* <MenuItem onClick={() => window.open("/Businessloan","_self")} style={{zIndex:9999}} className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5" >Business Loan</MenuItem> */}
      </MenuList>
    </Menu>
      </ul>


      <div className="sm:hidden flex flex-1 justify-end items-center border-none " style={{zIndex:9999}} >
        <img
          src={toggle ? close : menu}
          color="black"
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle(!toggle)}
          style={{zIndex:9999}} 
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border-none z-100` }
          style={{zIndex:9999}} >
          <ul className="list-none flex justify-end items-start flex-1 flex-col  z-100"  >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}  
                onClick={() => setActive(nav.title)}>
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Menu 
      animate={{
        mount: { y: 0 },
        unmount: { y: 55 },
      
      }}
      style={{zIndex:9999}}
      className="z-100"
    >
      <MenuHandler style={{zIndex:9999}} >
        <span className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5 z-100" >Loans</span>
      </MenuHandler>
      <MenuList className="my-5 z-50" style={{zIndex:9999}} >
    
        <MenuItem onClick={() => window.open("/Carloan","_self")}  style={{zIndex:9999}}   className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5" >Car Loan</MenuItem>
        <MenuItem  onClick={() => window.open("/Personalloan","_self")}  style={{zIndex:9999}}  className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5" >Personal Loan</MenuItem>
        <MenuItem onClick={() => window.open("/homeloan","_self")}  style={{zIndex:9999}}     className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5">Home Loan</MenuItem>
        <MenuItem onClick={() => window.open("/Businessloan","_self")}  style={{zIndex:9999}}   className="text-black font-poppins font-medium cursor-pointer text-[16px] my-5" >Business Loan</MenuItem>
      </MenuList>
    </Menu>
          </ul>
        </div>
      </div>
    </nav>
    </>
};

export default Navbar;
