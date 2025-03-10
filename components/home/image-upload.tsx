"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface Props {
  uploaded: boolean;
  unProcessed: string;
  setUploaded: (uploaded: boolean) => void;
  setUnProcessed: (url: string) => void;
}

function ImageUpload({ uploaded , unProcessed, setUploaded, setUnProcessed }: Props ) {
  const form = useFormContext();
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      form.setValue("image", file);
      setUploaded(true);
      setUnProcessed(URL.createObjectURL(file));
      toast("Image Uploaded", {
        description: "Image Uploaded successfully, choose preferences to be applied",
      });
    }
  };

  function handleDragOver (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };

  function handleDragLeave (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div
      className={`flex flex-col items-center border border-dashed border-gray-500 bg-gray-100 justify-center ${
        isDragging ? "border-blue-500" : "border-black"
      } rounded-lg hover:border-blue-500 hover:text-blue-500 p-10 hover:shadow-md cursor-pointer w-full md:w-3/4 min-h-[300px] h-[40dvh] max-h-fit`}
       style={{
        backgroundImage: uploaded ? `url(${unProcessed})` : "none",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: uploaded? "white" : "black",
        backgroundColor: uploaded? "gray" : "white",
       }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {!uploaded && <UploadCloud size={60} />}
      {/* {uploaded && <Image src={unProcessed} height={150} width={200} alt="unprocessed image" />} */}
      <p>Drag and drop</p>
      <p>or</p>
      <label className="rounded-full bg-black text-white px-4 py-2 hover:bg-blue-500 mb-2 hover:text-white cursor-pointer">
        Click to upload
        <Input type="file" onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            form.setValue("image", file);
            setUploaded(true);
            setUnProcessed(URL.createObjectURL(file));
          }
        }} className="hidden" />
      </label>
      <p>Supported Formats: png, jpg, jpeg, webp, tiff</p>
    </div>
  );
};

export default ImageUpload;
