import { SelectedPage } from "@/share/type";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/set2.png";
import HText from "@/share/HText";
type Props ={
  setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}:Props) => {
  const {
    register,
    trigger,
    formState: {errors}
  }= useForm();
  const onSubmit = async (e: any) =>{
    
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault();
    }
  }
  return (
    <section id="contactus" className="mx-auto  w-11/12  pt-24 pb-32 border rounded-2xl">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
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
        className="md:w-3/5"
        >
          <HText><span className="text-primary-500">JOIN NOW</span> TO GET IN SUCCESS</HText>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda, mollitia beatae quos quam iusto cumque sunt dicta neque perspiciatis deserunt ullam facere est error. Vero, similique! Aperiam, harum voluptatibus?</p>
        </motion.div>
        <div className="mt-10 j justify-between gap-8 md:flex">
          <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0},
          }}
          >
  <form target="_blank" onSubmit={onSubmit} method="POST" action="https://formsubmit.co/046b88d2767d1c50d852ad6b760b0fa7">
                <input type="text"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength:100,
                })}
                
                />
                {errors.name && (
                    <p className="text-primary-500">
                      {errors.name.type === "required" && "This field is requeired."}
                      {errors.name.type === "maxLength" && "Max  length is 100."}
                    </p>
                )}
                <input type="email"
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                
                />
                {errors.email && (
                    <p className="text-primary-500">
                      {errors.email.type === "required" && "This field is requeired."}
                      {errors.email.type === "pattern" && "In valid email address"}
                    </p>
                )}
                <textarea rows={5} cols={30}
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength:500,
                })}
                
                />
                {errors.message && (
                    <p className="text-primary-500">
                      {errors.message.type === "required" && "This field is requeired."}
                      {errors.message.type === "maxLength" && "Max  length is 200."}
                    </p>
                )}
                <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">Submit</button>
              </form>
          </motion.div>
          <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay:0.5, duration: 0.5}}
          variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y: 0},
          }}
          >
              <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img className="w-full" src={ContactUsPageGraphic} alt="error" />
              </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
