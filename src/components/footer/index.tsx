
import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="error" />
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime suscipit atque dolores repellat consequatur quidem fuga ipsa, voluptates quibusdam quis quasi cum tenetur. Laudantium commodi ipsa aliquam voluptatum id exercitationem?</p>
                    <p>&copy; All Rights Reserved !</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">YARD FITNESS</p>
          <p className="my-5">MY FITNESS</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eveniet!</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Odisha,Bhubaneswar</p>
          <p>(+91)6290467488</p>
        </div>
            </div>
        </footer>
  )
}

export default Footer
