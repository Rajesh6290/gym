import { SelectedPage } from "@/share/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page:string;
    selectedPage:SelectedPage;
    setSelectedPage:(value: SelectedPage)=> void;
}
const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
        const lowerCasePage = page.toLowerCase().replace(/ /g,"") as SelectedPage;
    // const flexBetween = "flex items-center justify-between";
  return (
   <AnchorLink
   className={`${selectedPage === lowerCasePage ? "text-blue-500" : ""} transition duration-500 hover:text-primary-500 `}
    href={`#${lowerCasePage}`}
    onClick={()=>setSelectedPage(lowerCasePage)}
   >
    {page}
   </AnchorLink>
  )
}

export default Link
