// Libs
import { z } from "zod";

export const loginFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
  })
  .required();

export const pixabayImageSchema = z.object({
  id: z.coerce.string(),
  imageWidth: z.number(),
  imageHeight: z.number(),
  tags: z.string().optional(),
  alt_description: z.string().optional(),
  description: z.string().optional(),
  largeImageURL: z.string(),
  user: z.string(),
  userImageURL: z.string(),
});

export const unsplashImageSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  description: z.string().nullable().optional(),
  alt_description: z.string().nullable().optional(),
  urls: z.object({
    raw: z.string().optional(),
    full: z.string().optional(),
    regular: z.string(),
    small: z.string(),
  }),
  links: z.object({
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

export const pixabayImagesResponseSchema = z.object({
  moreResults: z.boolean(),
  total: z.number().optional(),
  totalHits: z.number().optional(),
  hits: z.array(pixabayImageSchema),
});

export const unsplashImagesResponseSchema = z.object({
  total: z.number().optional(),
  total_pages: z.number(),
  results: z.array(unsplashImageSchema),
});

export const imageSchema = z.object({
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
    download: z.string(),
  }),
  user: z.object({
    username: z.string(),
    name: z.string(),
    profile_image: z.string(),
  }),
});
