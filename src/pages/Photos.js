import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils/index";

export default function Photos() {
  const { allPhotos } = useContext(Context);

  const photoElements = allPhotos.map((img, index) => {
    return <Image key={img.id} className={getClass(index)} img={img} />;
  });
  return <main className="photos">{photoElements}</main>;
}
