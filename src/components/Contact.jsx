import Datepicker from 'flowbite-datepicker/Datepicker';
import { useState } from 'react';
import { emi } from '../assets';
import { axis,aubank,safety } from '../assets';
import { layout } from '../style';

const Contact= () => {
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    phone:"",
    income:"",
 
    card:"",
  });
  let name,value;
  const postUserData=(event)=>{
name= event.target.name;
value=event.target.value;
setUserData({... userData,[name]:value});
  }
  //Firebase
  const submitData =(event)=>{
event.preventDefault();
const  {name,phone,email,income,pan,card}=userData;
if(name&&phone&&email&&income){
const res =fetch(
"https://finages-cdda0-default-rtdb.firebaseio.com/CreditCards.json",
{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name,phone,email,income,pan,card
    }),
}


);
if(res){
    setUserData({
        name:"",
        email:"",
        phone:"",
        income:"",
        pan:"", 
        card,
     
    })
    alert("Thank You for filling the form.");
   
}


}
else{
    alert("Fill Complete Data");
  }


}
    return <>
 
      <main id="Contact" className="relative py-28 bg-gray-900 rounded-lg">
          <div className=" relative z-10 max-w-screen-lg mx-auto text-gray-600 sm:px-4 md:px-8 animate-jump-in animate-once animate-duration-1000 animate-delay-100">
              <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                  <h3 className="text-cyan-400 font-semibold">
                     Finages 24 x 7
                  </h3>
                  <p className="text-white text-3xl font-semibold sm:text-4xl z-1">
                  Reach to Finages
                  </p>
                  <p className="text-gray-300">
                      We’d love to help you out.
                  </p>
              </div>
              <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xln" style={{zIndex:1}}>
                  <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-5"
                   method='POST'>
                      <div >
                          <label className="font-medium">
                              Full name
                          </label>
                          <input
                          name="name"
                              type="text"
                              required
                              placeholder='Eg-Deep Sharma'
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          value={userData.name}
                          onChange={postUserData}
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Email
                          </label>
                          <input
                              type="email"
                              required
                              name="email"
                              placeholder="singh@gmail.com"
                              value={userData.email}
                              onChange={postUserData}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                    

                      <div>
                          <label className="font-medium">
                              Average Monthly Income
                          </label>
                          <input
                              type="number"
                              name="income"
                              placeholder="0-1,00,000"
                              value={userData.income}
                              onChange={postUserData}
                              required
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      




                      <div>
                          <label className="font-medium">
                          Pan Number(Optional)
                          </label>
                          <input
                              type="text"
                              name="pan"
                              placeholder="XXXXXXXXXX"
                              value={userData.pan}
                              onChange={postUserData}
                              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Phone number
                          </label>
                          <div className="relative mt-2">
                              <input
                              name="phone"
                                  type="number"
                                  placeholder="Please Add "
                                  value={userData.phone}
                                  onChange={postUserData}
                                  required
                                  className="w-full pl-[1rem] pr-3 py-2 place appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              />
                          </div>
                      </div>
                      

        {/* <label for="countries" class="block mb-2  text-sm font-medium text-gray-900 dark:text-Black">Occupation</label> */}
        <div>
                          <label className="font-medium">
                              Which Credit Card you applying for ? Eg-SBI,HDFC.
                          </label>
                          <div className="relative mt-2">
                              <input
                              name="card"
                                  type="text"
                                  placeholder="SBI"
                                  value={userData.card}
                                  onChange={postUserData}
                                  required
                                  className="w-full pl-[1rem] pr-3 py-2 place appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              />
                          </div>
                      </div>

                      {/* <div>
                          <label className="font-medium">
                              Any Message For 
                          </label>
                          <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                      </div> */}
                      <button onClick={submitData}
                          className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                          Submit
                      </button>
                  </form>
              </div>
          </div>
        

      </main>
      <div class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black-500 sm:text-center dark:text-gray-400">* In order to ensure effective communication and facilitate future interactions, We will store the necessary information provided.
</span>
    </div>
</div>

      </>
}
export default Contact;