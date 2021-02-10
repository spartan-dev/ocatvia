import React from "react";
import ron5 from "../images/assets/ron5.jpg";
const ProductDetail = ({ product }) => {
  //Todo poner los datos dinamicos de el productos
  console.log(product);
  return (
    <div className="container">
      <p className="small py-10">
        Inicio &gt; Licores &gt; Ron &gt; Ron Barceló Imperial Premium Blend
      </p>
      <div className="flex items-center justify-around">
        <img src={ron5} className="w-96" />
        <div className="w-1/3">
          <p className="detail-title">
            Ron Barceló <br /> Imperial <br /> Premium Blend {product.title}
          </p>
          <p className="font-gotham-book opacity-50 my-6 leading-9">
            Ron premium
            <br />
            Tamaño: 750 ml <br />
            País de origen: República Dominicana
          </p>
          <p className="font-gotham-medium text-2xl tracking-widest">
            $76.49 <span className="text-base tracking-widest">USD</span>
          </p>
          <div className="my-9 h-14 border-2 border-beige py-1 px-4">
            <p className="small opacity-50">Cantidad</p>
            <p className="font-gotham-book">1 pieza</p>
          </div>
          <button className="btn-red">Agregar a bolsa</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
