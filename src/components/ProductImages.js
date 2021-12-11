import { useState } from "react";
import { ProdImgCont } from "../styles/styledComp";

const ProductImages = ({ props: { image } }) => {
  const [imgSelected, setImgSelected] = useState(image[0]);
  return (
    <ProdImgCont>
      <div className="img-list">
        {image.map((el, index) => (
          <img key={index} src={el} alt="img" onClick={()=>setImgSelected(el)} />
        ))}
      </div>
      <div className="img-selected">
        <img src={imgSelected} alt="img" />
      </div>
    </ProdImgCont>
  );
};

export default ProductImages;
