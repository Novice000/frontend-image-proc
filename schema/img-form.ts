import z from 'zod';

const imgFormSchema = z.object({
  image: z.instanceof(File),
  quality: z.number().gte(0, {message: "Quality should be greater than or equal to 0"}).lte(100, {message:"Quality should be less than or equal to 100"}).default(50).optional(),
  img_format: z.enum(['jpeg', 'png', 'tiff', 'webp', 'jpg', 'pdf']).optional(),
  remove_bg: z.boolean().optional()
})
  .strict().refine(image => image.image.size < 5000000, {
    message: "Image size should be less than 5MB",
    path: ["image"],
  }).refine(image => image.image.type.startsWith("image"), {
    message: "File should be an image",
    path: ["image"],
  });

export default imgFormSchema