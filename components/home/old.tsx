"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ScissorsIcon, ArrowLeftRight, Shrink } from "lucide-react";
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import imgFormSchema from "@/schema/img-form";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { BounceLoader } from "react-spinners";
import instance from "@/axios/axios";
import ImgDownload from "./img-download";
import ErrorPage from "./error-page";
import Image from "next/image";

function ImgForm() {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [isError, setIsError] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [unProcessed, setUnProcessed] = useState("");

  
  const form = useForm<z.infer<typeof imgFormSchema>>({
    resolver: zodResolver(imgFormSchema),
    defaultValues: {
      quality: 50,
      img_format: "jpeg",
      remove_bg: false,
    },
  });
  
  useEffect(()=>{
    const file = form.watch("image");
    const unProcessedUrl = URL.createObjectURL(file);
    setUnProcessed(unProcessedUrl);
  },[form.watch("image")])

    function handleSubmit(data: z.infer<typeof imgFormSchema>) {
      setIsLoading(true);
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
          responseType: "blob", // Ensure correct handling of binary responses
        })
      .then((res) => {
        if (res.status === 200) {
          let imageBlob = res.data;
          let imageUrl = URL.createObjectURL(imageBlob);
          setImageURL(imageUrl);
        }
        setIsLoading(false);
      }).catch((err) => {
        setIsError(true);
      });
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
    }
    form.setValue("image", file);
    toast("Image Uploaded", {
      description:
        "Image Uploaded succesfully, choose preferences to be applied",
    });
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }



 

  return (
    <>
      {!imageURL && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full px-10 md:px-[15%] my-5 grid place-items-center"
          >
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem
                  className={`flex flex-col items-center border border-dashed border-gray-500 bg-gray-100 justify-center ${
                    isDragging ? "border-blue-500" : "border-black"
                  } border-dashed w-full rounded-lg hover:border-blue-500 hover:text-blue-500 p-10 hover:shadow-md cursor-pointer w-full md:w-3/4 min-h-[300px] h-[40dvh]`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <FormLabel className="flex flex-col items-center justify-center gap-5">
                    {!uploaded && <UploadCloud size={60} /> }
                    {uploaded && <Image src={unProcessed} height={200} width={200} alt="unprocessed image"/>}
                    <p>Drag and drop</p>
                    <p>or</p>
                    <p className="rounded-full bg-black text-white px-6 py-4 hover:bg-blue-500 hover:text-white">
                      click to upload
                    </p>
                    <p>Supported Formats: png, jpg, jpeg, webp, tiff</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className="hidden"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 justify-center items-center w-full my-10  ">
              <FormField
                control={form.control}
                name="quality"
                render={({ field }) => (
                  <FormItem className="functionality-card">
                    <FormLabel className="flex justify-start items-center gap-5">
                      <Shrink size={20} />
                      <p className="text-lg">Quality</p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        className="w-full"
                        min={0}
                        max={100}
                        step={5}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Adjust the quality of the compressed image. Defaults to
                      75.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="remove_bg"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="functionality-card">
                    <FormLabel className="flex justify-start items-center gap-5">
                      <ScissorsIcon size={20} />
                      <h3 className="text-lg">Remove Background</h3>
                    </FormLabel>
                    <FormControl>
                      <Button
                        type="button"
                        onClick={() => field.onChange(!field.value)}
                        className={`w-full bg-black border-black text-white hover:border-blue-500 hover:scale-105 ${
                          field.value ? "bg-blue-500 text-white" : ""
                        }`}
                      >
                        Remove Background
                      </Button>
                    </FormControl>
                    <FormDescription>
                      Remove the background of the picture. Defaults to False. <strong
                      className="font-bold">If transparency is needed, avoid using JPEG</strong>.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="img_format"
                render={({ field }) => (
                  <FormItem className="functionality-card">
                    <FormLabel className="flex justify-start items-center gap-5">
                      <ArrowLeftRight size={20} />
                      <p className="text-lg">Image Format</p>
                    </FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue="png"
                    >
                      <FormControl>
                        <SelectTrigger className="w-full min-w-full">
                          <SelectValue
                            placeholder="Select format"
                            className="hover:scale-105"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-full bg-white">
                        <SelectItem value="jpeg">JPEG</SelectItem>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="tiff">TIFF</SelectItem>
                        <SelectItem value="webp">WEBP</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The output format for the image. This will determine the
                      type of file that is downloaded. Defaults to png.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full md:w-1/2 bg-black border-black text-white hover:border-blue-500 hover:scale-105">
              Process
            </Button>
          </form>
        </Form>
      )}
      ;
     
    </>
  );
}

export default ImgForm;
