import { motion } from "framer-motion";
import { staggerContainer,fadeIn,buttonVariant } from "./motion";

export default function Offer(){
    return(
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="offer" className="z-10 relative top-0 px-4 py-16 sm:py-10 md:py-28 lg:px-12">
            <motion.h1 variants={buttonVariant(0.6)} className="font-bold text-4xl lg:text-6xl text-white mb-4 py-4 lg:mb-14">What Can We <span className="text-[#45f0df]">Offer for You</span></motion.h1>
            <div className="flex flex-wrap">
                <motion.div variants={fadeIn('right', 'spring', 0 * 0.5, 0.75)} className="flex items-center text-sm font-bold sm:ml-14">
                    <div className="pr-10"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df"/></svg></div>
                    <div className="text-white">
                        <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">Various Destinations</h1>
                        <p>Sample text. Click to select the text box. Click again</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn('right', 'spring', 1 * 0.5, 0.75)} className="flex items-center text-sm font-bold my-14 sm:ml-14">
                    <div className="pr-10"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df"/></svg></div>
                    <div className="text-white">
                        <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">Everything is Included</h1>
                        <p>Sample text. Click to select the text box. Click again</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeIn('right', 'spring', 2 * 0.5, 0.75)} className="flex items-center text-sm font-bold sm:ml-14">
                    <div className="pr-10"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m20.95 33.85 14.7-14.7-3.3-3.3-11.4 11.4-5.55-5.55-3.25 3.3ZM24 45.25q-4.4 0-8.275-1.65T8.95 39.05q-2.9-2.9-4.55-6.775Q2.75 28.4 2.75 24q0-4.45 1.65-8.325 1.65-3.875 4.55-6.75t6.775-4.55Q19.6 2.7 24 2.7q4.45 0 8.325 1.675 3.875 1.675 6.75 4.55t4.55 6.75Q45.3 19.55 45.3 24q0 4.4-1.675 8.275t-4.55 6.775q-2.875 2.9-6.75 4.55T24 45.25Z" fill="#45f0df"/></svg></div>
                    <div className="text-white">
                        <h1 className="font-bold text-2xl py-3 lg:text-4xl mb-4 text-[#45f0df]">Affordable Prices</h1>
                        <p>Sample text. Click to select the text box. Click again</p>
                    </div>
                </motion.div>
            </div>
            <img className="z-[-1] w-[100%] h-[100%] absolute inset-0" src="/aboutus-banner.jpeg" alt="aboutus-banner" />
            <div className="z-[-1] w-[100%] h-[100%] absolute inset-0 bg-black/50"/>
        </motion.div>
    )
}