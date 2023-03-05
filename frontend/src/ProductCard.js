/* eslint-disable no-unused-vars */
import React from "react";

import productImage from "./assets/product.jpg";
import cartIcon from "./assets/icon-cart.svg";

const ProductCard = () => {
  return (
    <div
      className="flex justify-start content-center w-160 h-128 rounded-xl"
      style={{ backgroundColor: "hsl(0, 0%, 100%)" }}
    >
      <img
        src={productImage}
        alt="perfume"
        className="object-scale-down rounded-l-lg"
      />
      <div className="flex flex-col gap-8 w-full h-full ml-8 mt-6">
        <h1 className="font-montserrat text-[#6c7289] tracking-[6px]">
          PERFUME
        </h1>
        <div className="text-4xl text-[#1c232b] font-fraunces font-bold">
          <h1>Gabrielle</h1>
          <h1>Essence Eau</h1>
          <h1>De Parfum</h1>
        </div>
        <p className="text-xl leading-relaxed font-montserrat text-[#6c7289] mr-24">
          A floral, solar and voluptuos interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-8">
          <h1 className="text-4xl font-fraunces text-[#3c8067]">$149.99</h1>
          <p className="text-md font-montserrat text-[#6c7289] line-through">
            $169.99
          </p>
        </div>
        <button
          onClick={null}
          className="flex justify-center items-center gap-3 w-auto h-12 mr-24 rounded-lg bg-[#3c8067] hover:bg-[#2a5a49]"
        >
          <img src={cartIcon} alt="Shopping Cart" className="w-4 h-4" />
          <p className="text-md font-montserrat text-white">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
