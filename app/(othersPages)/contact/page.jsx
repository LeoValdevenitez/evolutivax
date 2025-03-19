import Header2 from "@/components/evolutivax/Header2";
import Contact from "@/components/evolutivax/Contact";
import { BtnWhatsapp } from "@/components/evolutivax/BtnWhatsapp";


export const metadata = {
  title: "Contacto",
  description: "",
};
export default function page() {
  return (
    <>
  
        {" "}
        <Header2 />
        <div>
          <div className="rainbow-gradient-circle" />
          <div className="rainbow-gradient-circle theme-pink" />
        </div>
        <BtnWhatsapp />
        <Contact />

    </>
  );
}
