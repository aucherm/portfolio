import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Picture from "../components/picture";
/* import Cards from "../components/Cards"; */
import About from "../components/About";
import Card from "../components/Essai";


export default function Myself() {
  return (
    <>
      <NavBar />
      <Picture />
      <About/>
      <Card />
     {/*  <Cards
       title="Parcours" 
        content="Mon contenu ici"  />
         <Cards
       title="Compétences" 
        content="Mon contenu ici"  />
         <Cards
       title="Qualités" 
        content="Mon contenu ici"  /> */}
      <Footer />
    </>
  );
}
