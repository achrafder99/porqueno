import { Link } from "react-router-dom"
import pizza from "../Images/pizza.jpg"
import { MdRestaurant } from "react-icons/md"
import { Fade, Slide } from 'react-slideshow-image';

const Hero = () => {
    const backgroundimage = {
        backgroundImage: `url(${pizza})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (


        <>

            {/* <div className="w-full min-h-[350px]   sm:min-h-[500px] ">
                <div className=" ovverlay bg-gradient-to-l from-[#000000] min-h-[350px] sm:min-h-[500px]" style={backgroundimage}>

                    <Link to="/menu"><button className="flex justify-center  w-[50%] mx-[30%] my-[6rem] text-sm lg:w-[18%]  bg-[#e04a4a]  lg:my-[10%] lg:p-4 rounded-md lg:shadow-2xl lg:mx-[44%] text-white font-bold items-center ">
                        <span className="mx-2"><MdRestaurant size={28} />
                        </span>
                        MENU / COMMANDER EN LIGNE</button></Link>
                </div>
            </div > */}


            <div className="w-full min-h-[350px]   sm:min-h-[500px] ">

                <div className="ovverlay  min-h-[350px] sm:min-h-[500px] " style={backgroundimage}>
                    <Link to="/menu"><button className="flex justify-center text-sm   w-[50%] mx-[30%] my-[6rem] text-sm lg:w-[18%]  bg-[#e04a4a]  lg:my-[10%] lg:p-4 rounded-md lg:shadow-2xl lg:mx-[44%] text-white font-bold items-center ">
                        <span className="mx-2"><MdRestaurant size={28} />
                        </span>
                        MENU / COMMANDER EN LIGNE</button></Link>
                </div>

            </div>
        </>
    )
}

export default Hero 