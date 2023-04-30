import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./type";


type Props = {
    children: React.ReactNode;
    setSelectedPage : (value: SelectedPage)=> void;
}
const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
   <AnchorLink className="rounded-md text-white bg-red-500 px-10 py-2 hover:bg-cyan-400 hover:text-red" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
    {children}
   </AnchorLink>
  )
}

export default ActionButton
