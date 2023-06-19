import { clients } from "../constants";
import styles from "../style";
import Footer from "./Footer";
const Clients = () => {
  return <>


<div>
<h2 className={ `${styles.heading2} flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}>
      Our Partners
      </h2>
      {/* <h3> dummy dummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydumm  dummy dummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummydummyy</h3> */}
</div>
  <section id="Partners" className={`${styles.flexCenter} min-h-screen`} data-taos-offset="300">
 
    <div className={`${styles.flexCenter} flex-wrap w-full h-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  
  </section>

  </>
      };
   
export default Clients;
