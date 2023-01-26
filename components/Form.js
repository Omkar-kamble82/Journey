import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "./motion";

export default function Form(){

    return(
        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center items-center flex-col px-8 py-14 sm:flex-row lg:px-16" id="contactus">
            <motion.div variants={buttonVariant(0.8)} className="flex-1 mr-4">
                <h1 className="text-2xl font-bold sm:text-3xl overflow-hidden py-4 mb-8"><span className="text-[#40E0D0]">GET IN TOUCH</span> WITH OUR EXPERT</h1>
                <input className="bg-[#6de5d9] placeholder-white font-bold rounded-xl px-4 h-[40px] w-[100%]" placeholder="Name..."/>
                <input className="bg-[#6de5d9] placeholder-white font-bold rounded-xl px-4 h-[40px] my-8 w-[100%]" placeholder="Email..."/>
                <textarea rows="5" cols="33" className="bg-[#6de5d9] placeholder-white font-bold mb-10 rounded-xl px-4 w-[100%] py-4" placeholder="Message..."></textarea>
            </motion.div>
            <motion.img variants={buttonrightVariant(0.8)} className="flex-1 object-fill rounded-2xl h-[500px]" src="/form.jpg" alt="form-img" />
        </motion.div>
    )
}