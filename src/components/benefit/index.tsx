import HText from "@/share/HText";
import { BenefitType, SelectedPage } from "@/share/type";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/share/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title:"State of the Art Facilities",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est velit asperiores ratione sed eos vel consequatur atque dolor nemo!",

    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title:"State of the Art Facilities",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est velit asperiores ratione sed eos vel consequatur atque dolor nemo!",

    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title:"State of the Art Facilities",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est velit asperiores ratione sed eos vel consequatur atque dolor nemo!",

    },
];
const container = {
    hidden: {},
    visible:{
        transition: {staggerChildren: 0.2}
    },
};
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
            <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5}}
               variants={{
                   hidden: {opacity: 0, x: -50},
                   visible: {opacity: 1, x: 0},
               }}
                className="md:my-5 md:w-3/5">
                    <HText>MORE THEN JUST A GYM !</HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quasi necessitatibus ut officia ipsam, saepe perferendis laborum porro sed eligendi beatae reprehenderit culpa corrupti laboriosam provident deleniti dolore enim dolorum?
                    </p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
                className="md:flex items-center justify-between gap-8 mt-5">
                    {
                        benefits.map((benefit: BenefitType)=>{
                            return(
                                <Benefit
                                key={benefit.title}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                                />
                            )
                        })
                    }
                </motion.div>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="no connection" />
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{once: true, amount: 0.5}}
                                   transition={{ duration: 0.5}}
                                   variants={{
                                       hidden: {opacity: 0, x: 50},
                                       visible: {opacity: 1, x: 0},
                                   }}
                                >
                                    <HText>MILLINOS OF HAPPY STUDENTS GETTING{""} <span className="text-primary-500">SUCCESS</span></HText>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                           initial="hidden"
                           whileInView="visible"
                           viewport={{once: true, amount: 0.5}}
                           transition={{delay: 0.4,duration: 0.5}}
                           variants={{
                               hidden: {opacity: 0, x: 50},
                               visible: {opacity: 1, x: 0},
                           }}
                        >
                            <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum animi amet distinctio recusandae fugit officiis mollitia ex excepturi eligendi suscipit, esse, et commodi quidem odit velit molestiae nemo quia molestias accusantium? Quo perspiciatis aut commodi libero, sit ut pariatur optio. Error laudantium nesciunt nemo exercitationem enim illum, harum aliquam itaque!</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis perspiciatis quaerat dignissimos alias, quasi laboriosam beatae aliquam sed corporis tempore nam dolores velit architecto natus quas. Dolores molestiae atque laboriosam.</p>
                        </motion.div>
                        <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Join Now
                                    </ActionButton>
                                </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
