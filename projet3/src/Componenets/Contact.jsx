import map from "../Images/map.PNG"

const Contact = () => {
    const BackImage = {
        backgroundImage: `url(${map})`,
        backgroundPosition: "center",
        backgroundSize: "cover"

    }
    const StyleMap = {
        position: "relative", textAlign: "center", width: "100%", height: "500px"
    }
    return (
        <div className="container mx-auto contact grid grid-cols-1 xl:grid-cols-2  py-[50px]">
            <div className="contact p-4  flex justify-center">
                <form action="" className="grid grid-cols-1 gap-4 ml-4">
                    <input type="text" name="" id="" className="min-w-[100%] md:min-w-[550px] md:w-[500px] rounded-md text-[#000000]" placeholder="Nom Complet" />
                    <input type="text" name="" id="" className="min-w-[100%] md:min-w-[550px] md:w-[500px] rounded-md text-[#000000]" placeholder="Telephone" />
                    <input type="text" name="" id="" className="min-w-[100%] md:min-w-[550px] md:w-[500px] rounded-md text-[#000000]" placeholder="Sujet" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="p-4 md:min-w-[550px] md:w-[500px] rounded-md"></textarea>
                    <button className="bg-[#ff5252] p-2 rounded-md md:min-w-[550px] md:w-[500px]">Envoyer</button>
                </form>
            </div>
            <div className="map rounded-lg sahdow-2xl mt-4 bg-red ">

                <div className="rounded-md mb-4" id='mapouter' style={StyleMap}><div style={{ overflow: "hidden", background: "none!important", width: "100%", height: "100%" }} id='gmap_canvasid'><iframe style={{ width: "100%", height: "500px", }} id='gmap_canvas' src='https://maps.google.com/maps?q=34.261236316937755,%20-6.584270306964737&t=&z=19&ie=UTF8&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></div></div>
            </div>

        </div >
    )
}

export default Contact