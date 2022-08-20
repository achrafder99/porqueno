import pizza2 from "../Images/pizza2.jpg";
import { useEffect, useRef } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const MenuGallery = () => {
  let sections = document.querySelectorAll(".section");
  let navLinks = document.querySelectorAll(".item ul li a");
  console.log(navLinks);

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let ofsset = section.ofssetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (top >= ofsset && top < ofsset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(".item ul li a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  });

  return (
    <>
      <div className="gallery container mx-auto md:ml-[6%] md:w-[94%] md:max-w-[500px]">
        <div className="container mx-auto flex justify-center mt-4 ">
          <h1 className="p-4  mt-4 border-b font-extrabold " id="BURGERS">
            BURGERS
          </h1>
        </div>
        <div className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section">
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>

        <div className="container mx-auto flex justify-center mt-4 " id="pizza">
          <h1 className="p-4  rounded-md w-[50%] mt-4  text-center">Pizza</h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="Pizza"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div className="container mx-auto flex justify-center mt-4 ">
          <h1 className="p-4 text-left rounded-md w-[50%] mt-4  text-center">
            Tacos
          </h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="tacos"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div
          className="container mx-auto flex justify-center mt-4 "
          id="Sandwich"
        >
          <h1 className="p-4 rounded-md w-[50%] mt-4  text-center">Sandwich</h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="Sandwich"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div
          className="container mx-auto flex justify-center mt-4 "
          id="PLATS_E_ BROCHE"
        >
          <h1 className="p-4  rounded-md w-[50%] mt-4  text-center">
            PLATS ET BROCHE
          </h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="PLATS_ET_BROCHE"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div
          className="container mx-auto flex justify-center mt-4 "
          id="PLATS_ET_BROCHETTES"
        >
          <h1 className="p-4  rounded-md w-[50%] mt-4  text-center">
            PLATS ET BROCHETTES
          </h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="PLATS_ET_BROCHETTES"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div
          className="container mx-auto flex justify-center mt-4 "
          id="BOISSONS"
        >
          <h1 className="p-4 rounded-md w-[50%] mt-4  text-center">BOISSONS</h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="BOISSONS"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
        <div
          className="container mx-auto flex justify-center mt-4 "
          id="JUS_COCKTAILS"
        >
          <h1 className="p-4  rounded-md w-[50%] mt-4  text-center">
            JUS & COCKTAILS
          </h1>
        </div>
        <div
          className="menuItems container grid grid-cols-1 sm:grid-cols-3 items-center justify-center mx-auto mr-20 mt-8 gap-4 px-4 py-4 section"
          id="JUS_COCKTAILS"
        >
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
          <section className="text-center text-sm sm:text-lg  max-w-[300px]">
            <img src={pizza2} alt="" className="shadow-2xl" />
            <h1 className="mt-6 mb-2">CLASSIQUE CHEESEBURGER</h1>
            <h3 className="mb-6">
              Laitue, Tomate, Oignons, Cheddar, Emmental, Sauce Barbecue
            </h3>
            <h4 className="font-extrabold sm:text-2xl ">3500DH</h4>
          </section>
        </div>
      </div>
      <span className="cursor-pointer">
        <Link activeClass="active" to="BURGERS" spy={true} smooth={true}>
          <BsFillArrowUpCircleFill size={38} className="pb-2 pl-4 text-2xl" />
        </Link>
      </span>
    </>
  );
};
export default MenuGallery;
