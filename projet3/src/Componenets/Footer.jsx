import { AiFillContacts } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaClock } from "react-icons/fa"

const Footer = () => {
    return (
        <footer class="container mx-auto p-4 bg-white mt-4 grid grid-cols-1 md:grid-cols-3">

            <section className="text-center mb-6">
                {/* <span className="mx-4"><AiFillContacts size={42} /></span> */}
                <div className="flex items-center">
                    <span className="mx-4"><AiFillContacts size={36} /></span>
                    <h1 className="font-extrabold text-center mx-10">+212674309507<br></br>+212674309507  </h1>
                </div>

            </section>
            <section className="text-center">
                <div className="flex items-center">
                    <span className="mx-4"><FaMapMarkerAlt size={36} /></span>
                    <h1 className="font-extrabold">Angle Av Imam Ali et <br></br>Rue My Abdellah Magasin 1 14070 Kénitra </h1>
                </div>
            </section>
            <section className="text-center mt-4">
                <div className="flex items-center">
                    <span className="mx-4"><FaClock size={36} /></span>
                    <h1 className="font-semibold">Horaires d'ouvertures <span className="mx-2 font-normal">Lun - Dim   07:00 - 23:59</span>
                    </h1>

                </div>

                {/* <div className="grid left"> */}
                {/* <input className="border mx-4" type="text" name="" id="" placeholder="Send Email" />
                    <button className="bg-[#ff5252] p-2 rounded-md shadow-2xl text-white font-extrabold max-w-[300px]">Envoyer</button> */}
                {/* </div> */}
            </section>


            {/* <span className="">
                <section className="grid sm:text-left my-4 text-center">
                    <h1 className="font-extrabold sm:text-4xl mb-4 text-[#e04a4a]">Adreese & Contact</h1>
                    <p className="max-w-[350px] font-bold leading-relaxed">Angle Av Imam Ali et Rue My Abdellah Magasin 1
                        14070 Kénitra <br></br>
                        <a href="">+212 5373-68837</a>
                        <br></br>
                        <a href="">+212 5373-68837</a>
                        <br></br>
                        tamaris.centreville@gmail.com</p>
                </section>
            </span> */}
            {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul> */}
        </footer>
    )
}

export default Footer