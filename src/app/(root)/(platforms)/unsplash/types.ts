import { z } from "zod";

export const ImageSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  description: z.string().optional(),
  alt_description: z.string().optional(),
  urls: z.object({
    raw: z.string().optional(),
    full: z.string().optional(),
    regular: z.string(),
    small: z.string(),
  }),
  links: z.object({
    html: z.string(),
    download: z.string(),
  }),
  user: z.object({
    username: z.string(),
    name: z.string(),
    profile_image: z.object({
      large: z.string(),
    }),
  }),
});

export type Image = z.infer<typeof ImageSchema>;

export interface GetImagesApiResponse {
  results: Image[];
  total_pages: number;
  total: number;
}
