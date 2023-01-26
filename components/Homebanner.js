import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { textVariant } from "./motion";

export default function Homebanner(){

    return(
        <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative" id="#">
            <Navbar />
            <img className="h-screen w-screen z-[-1] object-cover" src="/home-banner.jpeg" alt="Home-banner" />
            <div className="banner absolute top-[25%] left-[50%]">
                <motion.h1 variants={textVariant(1)} className="text-4xl font-bold py-3 text-[#40E0D0] lg:text-6xl">Let's Take Journey</motion.h1>
            </div>
            <div className="bannerdescription  w-[100vw] text-white absolute top-[80%]">
                <div className="max-w-[600px] mx-auto overflow-hidden">
                    <motion.h1 variants={textVariant(1.2)} className="text-2xl font-bold py-4 lg:text-4xl">we provide best guidance</motion.h1>
                    <motion.p variants={textVariant(1.4)} className="text-sm">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</motion.p>
                    <motion.button variants={textVariant(1.6)} className="text-white bg-[#40E0D0] py-2 px-4 mt-2 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">Read more</motion.button>
                </div>
            </div>
        </motion.div>
    )
}