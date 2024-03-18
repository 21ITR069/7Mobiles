import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Zebronics-zeb-sound-bomb-4-earbuds-white-Front-View-Thumbnail.png',
        name: 'Earbuds'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/apple-silicone-case-with-magsafe-for-iphone-14-plus-elderberry.png',
        name: 'Backcover'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/3D-tempered-glass-screen-protector-for-iphone-12-12-pro-black-Front-View-Thumbnail-Image.png',
        name: 'Screenguard'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/apple-iphone-15-plus-blue-thumbnail.png',
        name: 'Mobiles'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/apple-usb-c-power-adapter-20w-white.png',
        name: 'Chargers'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Mi-10000-mAh-Power-Bank-3i-Black-1-1.png',
        name: 'Powerbank'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/31367.png',
        name: 'Pendrive'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Smartwatch'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-green-10 transition-all hover:bg-green-300 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;