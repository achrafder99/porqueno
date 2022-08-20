import { useState } from "react"
import Footer from "./Footer"
import MenuGallery from "./MenuGallery"
import { Link } from 'react-scroll'




const Menu = () => {

    const [fixed, SetFixed] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 400)
        {
            SetFixed(true)
        }
        else
        {
            SetFixed(false)

        }
    })

    return (
        <>
            <div className="menu w-full  bg-[#1d1d1e] text-white ">
                <div className="container mx-auto">
                    <div className="item flex justify-center">
                        <ul className={` justify-between m-0 bg-black p-4 rounded-md sahdow-2xl hidden lg:flex ${fixed ? "navv" : ""}`}>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="BURGERS" spy={true} smooth={true}>BURGERS</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="pizza" spy={true} smooth={true}>Pizza</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="tacos" spy={true} smooth={true}>Tacos</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer ">
                                <Link activeClass="active" to="Sandwich" spy={true} smooth={true}>Sandwich</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">

                                <Link activeClass="active" to="PLATS_E_ BROCHE" spy={true} smooth={true}>PLATS ET BROCHE</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="PLATS_ET_BROCHETTES" spy={true} smooth={true}>PLATS ET BROCHETTES</Link>

                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="BOISSONS" spy={true} smooth={true}>BOISSONS</Link>
                            </li>
                            <li className="navlink mx-8 font-extrabold cursor-pointer" id="navLink">
                                <Link activeClass="active" to="JUS_COCKTAILS" spy={true} smooth={true}>JUS & COCKTAILS</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <MenuGallery />
            </div>
        </>
    )
}
export default Menu