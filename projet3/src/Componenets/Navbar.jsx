import React, { useState } from "react"
import { Fade as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import logo_porqueno from "../Images/logo_porqueno.png"

const Navbar = () => {

    const [ChangeColor, setChnageCOLOR] = useState(false)


    const ChangeColorNavbar = () => {
        if (window.scrollY > 99) setChnageCOLOR(true)
        else
            setChnageCOLOR(false)
    }

    window.addEventListener("scroll", ChangeColorNavbar)
    return (
        <>
            <div className={`navbar flex fixed w-full z-[1]  ${ChangeColor ? "changeColor" : ""}`} id="nav">

                <div className='container flex mx-auto justify-between mt-2'>
                    <div className="items flex items-center">
                        <img width={90} src={logo_porqueno} alt="" />
                        <ul className="sm:flex  p-4 hidden text-white">
                            <li className='mr-4 '><Link to="/" className="font-extrabold "><AiFillHome size={20} className="my-1 rounded-sm" /></Link></li>
                            <span className="flex justify-center container w-screen"><li className='mr-4 '><a href="" className="font-extrabold">
                                <a target="_blank" href="">0674309507</a>
                            </a></li>
                                <li className='mr-4 '> <a href="" className="font-extrabold">0674309508</a></li>
                            </span>
                        </ul>
                    </div>
                    <div className="">
                        <Hamburger color='white' />
                    </div>
                </div>
            </div></>
    )
}

export default Navbar