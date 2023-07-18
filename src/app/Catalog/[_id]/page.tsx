import { Anybody } from "next/font/google";
import { client } from "../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import ProductDetailsCard from "@/Components/views/ProductDetailsCard";

async function getata(id: string) {
  const res = await client.fetch(`*[_type=='products' && _id=='${id}']`);
  console.log(res);
  return res;
}

export default async function Catalog({ params }: { params: { _id: string } }) {
  const ProductData = await getata(params._id);

  return (
    <div>
      <ProductDetailsCard data={ProductData[0]} />
    </div>
  );
}
