"use client";
import React, { FC, useState } from "react";
import { ProductType, imagesType } from "../utils/ProductDataTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ProductDetailsCard: FC<{ data: ProductType }> = ({ data }) => {
  const [selectedImagePreview, setSelectedImagePreview] = useState<string>(
    data.image[0]._key
  );
  const [quantity, setQuantity] = useState(1);
  const incrementQuanity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity == 0) {
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {/* left  */}
      <div className="flex gap-x-4 md:gap-x-8">
        {/* left  */}
        <div className="space-y-4">
          {data.image.map((subitems: any, index: number) => (
            <div
              key={index}
              className="w-16 md:w-24"
              onClick={() => setSelectedImagePreview(subitems._key)}
            >
              <Image
                width={1000}
                height={1000}
                alt={subitems.alt}
                src={urlFor(subitems).width(1000).height(1000).url()}
              />
            </div>
          ))}
        </div>
        {/* Right */}
        <div className="w-[33rem] ">
          {data.image.map((subitem: imagesType, index: number) => {
            if (subitem._key == selectedImagePreview) {
              return (
                <Image
                  width={1000}
                  height={1000}
                  alt={subitem.alt}
                  src={urlFor(subitem).width(1000).height(1000).url()}
                />
              );
            }
          })}
        </div>
      </div>
      {/* Right  */}
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-3xl text-gray-700">{data.productName}</h1>
          <p className="text-gray-400 font-medium text-xl ">
            {data.productTypes[0]}
          </p>
        </div>
        <div>
          <div className="space-y-2">
            <p className="text-lg font-semibold  text-gray-700">Select Size</p>
            <div className="flex gap-2">
              {data.size.map((subitem: string, index: number) => (
                <div
                  key={index}
                  className="rounded-full font-semibold hover:shadow-lg cursor-pointer bg-gray-100 text-gray-500 w-12 h-12 flex justify-center items-center"
                >
                  {subitem}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-7">
          <p className="font-semibold text-xl text-gray-800">Quantity</p>
          <div className="flex gap-2 items-center">
            <div
              onClick={decrementQuantity}
              className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200"
            >
              -
            </div>
            <p>{quantity}</p>
            <div
              onClick={incrementQuanity}
              className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-black"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex gap-x-8 items-center"> 
        <button className="flex justify-center items-center  text-white bg-gray-900 border border-gray-300 mt-2 md:mt-0  px-4 py-2">
        <BsCart2/>
        &nbsp;
        &nbsp;
          AddtoCart
          </button>
        <p className="text-2xl font-semibold">${data.price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
