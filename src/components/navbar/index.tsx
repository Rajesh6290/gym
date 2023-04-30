import { useState } from "react";
import {XMarkIcon,Bars3Icon} from "@heroicons/react/24/solid";

import Link from "./Link";
import { SelectedPage } from "@/share/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/share/ActionButton";
type Props = {
    isTopPage:boolean;
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage)=> void;
}
const Navbar = ({isTopPage,selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled,setIsMenu] = useState<boolean>(false);
    const mediaScreen = useMediaQuery("(min-width: 1060px)");
    const navbarbackground = isTopPage ? "" : "bg-cyan-200 drop-shadow";
  return (
   <nav>
    <div className={`${navbarbackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16 `}>
      
                {mediaScreen ? ( 
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-xl font-bold`}>
                        <h1 className="">Yard-Gym</h1>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  
                    <Link page="ContactUs" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                 </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                </div>
                </div>
                ) : (
                    <button className="rounded-full  bg-secondary-500 p-2" onClick={()=> setIsMenu(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                )}
            </div>
        </div>
    </div>
    {!mediaScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={()=> setIsMenu(!isMenuToggled)} className="rounded-full  bg-secondary-500 p-2">
                    <XMarkIcon className="h-6 w-6 text-red-600 " />
                </button><br />
                
            </div>
            <hr className="b bg-red-600 text-yellow-400 w-full"/>
            <div className="ms-[33%] flex flex-col gap-6 text-2xl">
                    <Link  page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link  page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                   
                    <Link  page="ContactUs" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <hr className="b bg-red-600 text-yellow-400 w-full"/>

        </div>
    )}
   </nav>
  )
}

export default Navbar
