// import React from "react";
// import Slider from "react-slick";

import { SelectedPage, ClassType } from "@/share/type"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/share/HText";
import Class from "./Class";

const Classes: Array<ClassType> =[
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image1,
  },
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image2,
  },
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image3,
  },
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image4,
  },
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image5,
  },
  {
    name: "Online Classes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.",
    image: image6,
  },
];
type Props ={
    setSelectedPage : (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}:Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
          >
              <div className="md:w-3/4">
                <HText>OUR CLASSES</HText>
                <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id placeat ipsam laborum error natus temporibus. Reiciendis pariatur labore est tempore velit itaque sunt? Minima ducimus quasi illo similique dicta.</p>
              </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] w whitespace-nowrap">
              {Classes.map((item,index)=>{
                return(
                  <Class 
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  />
                )
              })}

            </ul>
          </div>
        </motion.div> 
    </section>
  )
}

export default OurClasses
