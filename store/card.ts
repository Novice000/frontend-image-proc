import { title } from "process";
import {
  FileBox,
  LucideProps,
  Scissors,
  LucideTriangleDashed,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type CardProps = {
  title: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const cards: CardProps[] = [
  {
    title: "Image Compressor",
    description: "Compress your image to reduce the size",
    href: "/compress",
    icon: FileBox,
  },
  {
    title: "Remove Background",
    description: "Remove background from your image",
    href: "/remove-background",
    icon: Scissors,
  },
  {
    title: "Convert Image Format",
    description: "Convert your image to different format",
    href: "/convert",
    icon: LucideTriangleDashed,
  },
];
