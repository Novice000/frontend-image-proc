import React from "react";
import { useFormContext } from "react-hook-form";
import { ScissorsIcon, ArrowLeftRight, Shrink } from "lucide-react";
import {
  FormField,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ImageOptions() {
  const form = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 w-full my-10">
      <FormField
        control={form.control}
        name="quality"
        render={({ field }) => (
          <FormItem className="functionality-card">
            <FormLabel className="flex items-center gap-5">
              <Shrink size={20} />
              <p className="text-lg">Quality</p>
            </FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                min={0}
                max={100}
                step={5}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
            <FormDescription>
              Adjust image quality. Defaults to 75.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="remove_bg"
        render={({ field }) => (
          <FormItem className="functionality-card">
            <FormLabel className="flex items-center gap-5">
              <ScissorsIcon size={20} />
              <p className="text-lg">Remove Background</p>
            </FormLabel>
            <FormControl>
              <Button
                type="button"
                onClick={() => field.onChange(!field.value)}
                className={`w-full ${
                  field.value ? "bg-black text-white" : "bg-white text-black"
                } border border-black`}
              >
                Toggle Background Removal
              </Button>
            </FormControl>
            <FormDescription>
              Remove the background of the picture. Defaults to False.{" "}
              <strong className="font-bold">
                If transparency is needed, avoid using JPEG
              </strong>
              .
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
            <FormLabel className="flex items-center gap-5">
              <ArrowLeftRight size={20} />
              <p className="text-lg">Image Format</p>
            </FormLabel>
            <Select {...field} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger className="min-w-full">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-white w-full">
                <SelectItem value="jpeg">JPEG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="tiff">TIFF</SelectItem>
                <SelectItem value="webp">WEBP</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
            <FormDescription>
              The output format for the image. This will determine the type of
              file that is downloaded. Defaults to png.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default ImageOptions;
