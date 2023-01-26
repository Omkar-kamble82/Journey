import { packages } from "./data";
import { motion } from "framer-motion";
import { staggerContainer,fadeIn,buttonVariant } from "./motion";

export default function Packages() {
    return (
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-[60px] relative z-10" id="packages">
            <div className="max-w-[800px] mx-auto pt-[60px] pb-[30px]">
                <motion.h1 variants={buttonVariant(0.6)} className="text-center py-4 text-[#40E0D0] text-2xl sm:text-4xl font-bold mb-4 overflow-hidden">Our Packages</motion.h1>
            </div>   
            <div className="flex justify-center items-center flex-wrap">
                {packages.map((item,index) => {
                    return(
                        <motion.div 
                            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                            className="mx-4 border-2 p-4 rounded-2xl mb-6 border-white  w-[280px] lg:mx-6" key={item.id}>
                            <img className="h-[270px] w-[280px] object-fill" src={item.url} alt="merch-image"/>
                            <h1 className="text-2xl font-bold text-[#40E0D0] my-2 md:my-4">{item.heading}</h1>
                            <p className="text-white mb-6">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            <div className="flex justify-between items-center">
                                <h1 className="text-white font-bold text-2xl">{item.prices}</h1>
                                <button className="text-white bg-[#40E0D0] py-2 px-3 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">BOOK NOW</button>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <img className="z-[-1] w-[100%] h-[100%] absolute inset-0" src="/packages-banner.jpeg" alt="packages-banner" />
            <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/70"/>
        </motion.div>
    )
} 