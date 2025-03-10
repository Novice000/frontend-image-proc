"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import imgFormSchema from "@/schema/img-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import instance from "@/axios/axios";
import ImageUpload from "./image-upload";
import ImageOptions from "./image-options";
import ImgDownload from "./img-download";
import { BounceLoader } from "react-spinners";
import { useRouter } from "next/navigation";

function ImgForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [isError, setIsError] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [unProcessed, setUnProcessed] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof imgFormSchema>>({
    resolver: zodResolver(imgFormSchema),
    defaultValues: { quality: 75, img_format: "jpeg", remove_bg: false },
  });

  function handleSubmit(data: z.infer<typeof imgFormSchema>) {
    setIsLoading(true);
    setIsError(false);
    setImageURL(""); // Reset previous image URL
    const failsafe = setTimeout(() => { 
      setIsLoading(false);
      setIsError(true);
    }, 60*1000);

    const formData = new FormData();
    formData.append("image", data.image);
    if (data.quality) formData.append("quality", data.quality.toString());
    if (data.img_format) formData.append("img_format", data.img_format);
    formData.append("remove_bg", data.remove_bg ? "true" : "false");

    instance
      .post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      })
      .then((res) => {
          const imageBlob = res.data;
          const imageUrl = URL.createObjectURL(imageBlob);
          setImageURL(imageUrl);
      })
      .catch(() => {
        setIsError(true);
      }).finally(() => {
        setIsLoading(false)
        clearTimeout(failsafe);
      });
  }

  if (isLoading) {
    return (
      <div className="h-full w-screen fixed top-0 bg-white bg-opacity-50 flex items-center justify-center z-[60]">
        <BounceLoader size={40} />
      </div>
    );
  }

  if (isError) {
    router.push("/error"); 
    return null;
  }

  return (
    <>
      {!imageURL && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full px-10 md:px-[15%] my-5 grid place-items-center"
          >
            <ImageUpload
              uploaded={uploaded}
              setUploaded={setUploaded}
              unProcessed={unProcessed}
              setUnProcessed={setUnProcessed}
            />
            <ImageOptions />
            <Button
              type="submit"
              className="w-full md:w-1/2 bg-black border-black text-white hover:border-blue-500 hover:scale-105 mb-10"
            >
              Process
            </Button>
          </form>
        </Form>
      )}
      {imageURL && <ImgDownload imageURL={imageURL} setImageURL={setImageURL} />}
    </>
  );
}

export default ImgForm;
