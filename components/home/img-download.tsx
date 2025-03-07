import React from "react";
import Image from "next/image";

export default function ImgDownload({
  imageURL,
  setImageURL,
}: {
  imageURL: string;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-10">
        <h2 className="text-2xl font-bold">Output</h2>
        <Image src={imageURL} width={500} height={500} alt="output" />
        <a
          href={imageURL}
          download
          className="rounded-full text-white px-4 py-2 bg-black hover:bg-white hover:text-black hover:border-black hover:border"
          onClick={() => {
            setImageURL("");
          }}
        >
          Download
        </a>
      </div>
    </>
  );
}
