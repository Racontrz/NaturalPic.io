import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import Heart from "../components/Heart";

const Images = () => {
  const {fotos, setFotos} = useContext(MyContext);
 
  const handleClick = (id) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === id);
    
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    
    setFotos([...fotos]);
  };
   
  return (
    <div className="container">
      <div className="text-center m-5">
        <h2>Galeria de Fotos</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center col-sm-12">
        {fotos.map(foto =>(
          <div 
            key={foto.id} 
            style={{backgroundImage: `url(${foto.src.medium})`}} 
            className='foto m-3 d-flex flex-column '>
          <div 
            onClick={() => handleClick(foto.id)} >
            <Heart color={foto.liked}/>              
          </div>
          <div className="text-light text-center">
            <p>{foto.alt }</p>
          </div>
          </div>     
        ))}     
      </div>
    </div>
  );
};

export default Images;
