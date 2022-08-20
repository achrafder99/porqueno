import restaurantfrom from "../Images/restaurant.jpg";
import Footer from "./Footer";
import PORQUENO_1 from "../vido/PORQUENO_1.mp4";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Contact from "./Contact";

const Content = () => {
  const backgroundimage = {
    backgroundImage: `url(${restaurantfrom})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="content grid grid-cols-1">
        <section className=" sm:min-h-[400px] w-full container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 text-center py-[40px]">
          <div className="image min-h-[250px]  rounded-md ">
            {/* <iframe className="w-full h-full" id="education" src={PORQUENO_1} frameBorder="0"></iframe> */}

            <video controls autoplay="autoplay" width="100%" height="100%" loop>
              <source src={PORQUENO_1} type="video/mp4" />
            </video>
          </div>
          <span className="desc__ p-4">
            <h1 className="font-extrabold  mt-2 text-[#e04a4a] mb-1 sm:text-4xl md:text-2xl text-center">
              BIENVENUE CHEZ FASTFOOD PORQUENO{" "}
            </h1>

            <h1 className="font-extrabold  mt-2 text-white mb-1 ">
              Dégustez avec plaisir!
            </h1>
            <span className="">
              <p className="mb-6 font-semibold text-[#f5f5f5] mt-8  p-4 leading-loose tracking-widest lg:ml-[18%] text-left">
                PorqueNo votre restaurant fast food, disponible Matin,midi et
                soir et 7/7 notre chef vous propose des Plats,salades et Pizza
                et tout ce que vous désirez. prepares avec des produite frais,
                de saison et dans un décore agréable et conviviale,servis sur
                place ou à emporte.En plein centre ville et dans une zone calue
                ou la vue et agréable et une belle terasse vous acceuille tout
                au long de la journée.
              </p>
            </span>
            {/* <p className="mx-4  p-4 text-left m-6 font-bold leading-loose tracking-widests  shadow-md rounded-md text-xl   left-0 min-h-[550px]">
                            PorqueNo votre restaurant fast food, disponible Matin,midi et soir et 7/7 notre chef vous
                            propose des Plats,salades et Pizza et tout ce que vous désirez. prepares
                            avec des produite frais, de saison et dans un décore agréable et
                            conviviale,servis sur place ou à emporte.En plein centre ville et
                            dans une zone calue ou la vue et agréable et une belle terasse
                            vous acceuille tout au long de la journée.
                        </p> */}
          </span>
        </section>
        <section className="bg-[#000000] py-[40px] ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
            <p className="mb-6 p-4 font-semibold text-[#f5f5f5] text-left leading-loose tracking-widest ">
              Votre carte Tamaris est désormais en ligne et un système de
              commande rapide et pratique, est mis en place pour une meilleure
              expérience client. Composez vos plats favoris, validez votre
              panier et venez récupérer votre commande ou faites vous livrer en
              toute sécurité et rapidité.
            </p>

            <span className="livraison">
              <MdOutlineDeliveryDining
                className="absolute text-[8rem] md:text-[16rem]"
                color="#ff5252"
              />
            </span>
            <h1 className="text-xl  md:text-6xl text-center">
              Livraison Gratuite 24 / 24 - 7 / 7{" "}
            </h1>
          </div>
          {/*
          <div className="container m-auto p-4 text-center pt-12 mb-12 grid lg:grid-cols-2">
            <span>
              <p className="mb-6 font-semibold text-[#f5f5f5] text-left leading-loose tracking-widest ">
                Votre carte Tamaris est désormais en ligne et un système de
                commande rapide et pratique, est mis en place pour une meilleure
                expérience client. Composez vos plats favoris, validez votre
                panier et venez récupérer votre commande ou faites vous livrer
                en toute sécurité et rapidité.
              </p>
            </span>
            <span className="livraison">
              <MdOutlineDeliveryDining
                size={250}
                className="absolute"
                color="#ff5252"
              />
              <h1 className="">Livraison Gratuite 24 / 24 - 7 / 7 </h1>
            </span>
          </div>
                    */}
        </section>
        <section className=" sm:min-h-[400px] w-full container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 text-center py-[40px]">
          <span>
            <h1 className="font-extrabold  mt-2 text-[#e04a4a] mb-1 sm:text-4xl md:text-2xl sm:text-left text-center">
              VOTRE PLAISIR{" "}
            </h1>
            <p className="mb-6 font-semibold text-[#f5f5f5] text-left leading-loose tracking-widest sm:text-left text-center">
              Retrouvez chez Snack Tamaris, une carte de plats complète pour
              ravir toutes vos envies. une multitude de sandwichs chauds, des
              burgers et des plats délicieux avec une large gamme de viandes
              fraîches et mélangées avec des épices typiques !
            </p>
          </span>
          <div
            className="image min-h-[250px]  rounded-md shadow-2xl"
            style={backgroundimage}
          ></div>
        </section>
      </div>

      <div className="bg-[#000000] sahdow-4xl">
        <Contact />
      </div>
    </>
  );
};

export default Content;
