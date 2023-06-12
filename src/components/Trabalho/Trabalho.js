import React from "react";
import "./Trabalho.css";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "https://i.ibb.co/0JQZpWM/barco.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/W29ZRR9/ballerina.jpg", width: 100, height: 100 },
  { src: "https://i.ibb.co/WGbPK9f/feet.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/ftVzBJY/bailarina3-001.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/YX45zMZ/lua-001.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/93K8wWj/ballerina2.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/sj1mpGc/squares.jpg", width: 3, height: 4 },
  { src: "https://i.ibb.co/DYT1gXf/maria.jpg", width: 4, height: 5 },
  { src: "https://i.ibb.co/cQFRpDD/mulhercomvela-001.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/pLgM5mm/negraecadeira-001.jpg", width: 6, height: 3 },
  { src: "https://i.ibb.co/KwDCvxY/mulheredoishomens-001.jpg", width: 3, height: 4 },
  { src: "https://i.ibb.co/W6QZFQC/mulherderoxo-001.jpg", width: 4, height: 4 },
  { src: "https://i.ibb.co/K7LGK4j/caro-001.jpg", width: 3, height: 4 },
  { src: "https://i.ibb.co/ssdsKJ6/PHOTO-2023-05-09-02-30-58.jpg", width: 6, height: 3 },

];

function Trabalho() {
  
  const [index, setIndex] = React.useState(-1);
  const RenderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
    <div className="img-container">
      <img
        alt={alt}
        style={{ ...style, width: "100%", padding: 0 }}
        {...restImageProps}
      />
    </div>
  );
  

  return (
      <div className="scroll-div">
        <h1>Portfolio</h1>
        <div className="intro">
          <div className="header">
            <p className="quote">
            "Para mim, a arte não espelha a vida, <br/>mas se faz do próprio real"
            </p>
            <p className="name">Magda Paiva</p>
          </div>
            <img src="https://i.ibb.co/gwLKXpJ/casa.jpg" alt="casa das duas mulheres"/>
        </div>
        <div className="gallery">
          <PhotoAlbum 
          layout="columns" 
          renderPhoto={RenderPhoto}
          photos={images} 
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1;
            if (containerWidth < 800) return 2;
            return 3;
          }}
          onClick={({ index }) => setIndex(index)}
          >
          </PhotoAlbum>
          <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({
          src: image.src
        }))}
      />
        </div>
      </div>
  );
}

export default Trabalho;
