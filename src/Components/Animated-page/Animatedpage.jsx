import {useEffect} from 'react'
import gifimage from "../../assests/gif/hoteljournel.gif";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaSearch } from "react-icons/fa";

const Animatedpage = () => {
 useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 2000,
        // easing: 'ease-in-sine',
      });
 }, [])
 

  return (
    <div className=" w-full h-[100vh] flex flex-col sm:flex-row">
    {/* left dv */}
    <div className="left flex flex-col  justify-center gap-7  sm:w-[50%] w-[100%] sm:h-[100%] h-[50%] px-[8vw] pl-[8vw]">
     <h1 className=' sm:text-5xl sm:max-md:text-4xl sm:max-md:w-[100%] text-4xl font-bold  sm:w-[90%] w-[100%]' data-aos="fade-down">Get the answers from the BOOK</h1>
     <p className=' sm:text-xl text- sm:max-md:text-sm sm:max-md:w-[100%]  text-md font-semibold text-[#0000009d] w-[95%]' data-aos="fade-down" data-aos-delay="200"  data-aos-offset= "-400"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
     {/* search box  */}
     <div className="searchbox flex items-center bg-[#0000004c] px-4 h-9 w-100 rounded-md gap-2"  data-aos="fade-down" data-aos-delay="400" data-aos-offset= "-400">
     <FaSearch className=' font-light text-[#0000009e]'/>
        <h1 className=' font-semibold text-lg text-[#0000009e]'>Search For a Book</h1>
     </div>
     {/* search box  */}
    </div>
    {/* left div end  */}

    {/* right div  */}
    <div className="right flex items-center justify-center right  sm:w-[50%] w-[100%] sm:h-[100%] h-[50%]"> <img className='sm:max-md:h-[50%] h-[80%] w-[70%] object-fit object-center ' src={gifimage} alt="" />
    </div>
    {/* right div end  */}
   </div>
  )
}

export default Animatedpage
