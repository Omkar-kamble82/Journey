import { motion } from "framer-motion";
import { buttonVariant } from "./motion";

export default function Aboutus(){
    return(
        <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="aboutus" className="z-10 relative top-0 px-4 py-16 sm:py-10 md:py-28 lg:px-12">
            <motion.h1 variants={buttonVariant(1)} className="font-bold text-4xl lg:text-6xl text-white mb-4 py-4 lg:mb-14">What do You Know <span className="text-[#45f0df]">About Us</span></motion.h1>
            <div className="lg:px-14 text-sm font-bold">
                <motion.p variants={buttonVariant(1.2)} className="text-white mb-8">Journey is a tour agency, specializing in organizing tours to all destinations. <span className="text-[#45f0df]">We are happy to make your holidays unforgettable and amazing! Our agents are experts in finding you the most comfortable and interesting place for you to have breathtaking holidays.</span> Select the country you’d like to visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and hotels.</motion.p>
                <motion.p variants={buttonVariant(1.4)} className="text-white text-sm">During our work we organized countless journeys for our clients. We started as a small tour bureau, and soon we expanded our offers list. <span className="text-[#45f0df]">Today we have valuable experience travelling and we can advise the most stunning resorts, cities and countries to visit!</span></motion.p>
            </div>
            <img className="z-[-1] w-[100%] h-[100%] absolute inset-0" src="/aboutus-banner.jpeg" alt="aboutus-banner" />
            <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/50"/>
        </motion.div>
    )
}