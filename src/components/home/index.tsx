
import { SelectedPage } from "@/share/type"
import ActionButton from "@/share/ActionButton";
import HomePageText  from "@/assets/HomePageText.png";
import HomePageGraphic  from "@/assets/set2.png";
import Marquee from "react-fast-marquee";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    
    setSelectedPage: (value:SelectedPage) => void;
}
const Home = ({ setSelectedPage }:Props) => {
    
return (
    <section id="home" className="gap-16 bg-yellow-400 py-10 md:h-full md:pb-0">
        <motion.div 
        onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            <div className="z-10 mt-32 md:basis-3/5">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="No connection" />
                        </div>
                    </div>

                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.3, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                className="mt-8 flex  items-center gap-8 ">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}><p>Learn More</p></AnchorLink>
                </motion.div>
            </div>
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="no connection" />
            </div>
        </motion.div>
        
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-full items-center justify-between gap-8">
                    <Marquee  direction="left" >
                        <div className="text-2xl text-red-500  font-bold ">
                        <h1 >Join Our Center and grow your body and win the worled...</h1>
                        </div>
                    </Marquee>
               
                    </div>
                </div>
            </div>
       
    </section>
  )
}

export default Home
