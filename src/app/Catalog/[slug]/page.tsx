import { FC } from "react";

export default async  function Catalog({ params }: { params: { slug: string } }) {
  
  return <div>{params.slug}</div>;
};


