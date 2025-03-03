// Libs
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .nonempty({ message: "This field can't be empty" })
    .max(100),
});

export const signupFormSchema = z.object({
  firstName: z.string().nonempty({ message: "First name should not be empty" }),
  lastName: z.string().nonempty("Last name should not be empty"),
  userName: z.string().min(3, { message: "Must contain atleast 3 characters" }),
  password: z
    .string()
    .min(8, { message: "Should contain minimum 8 characters" })
    .max(100),
  email: z.string().email(),
});

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

export const computerVisionImageSchema = z.object({
  description: z.string(),
  id: z.string(),
  aspect: z.number(),
  assets: z.object({
    preview: z.object({
      url: z.string(),
      height: z.number(),
      width: z.number(),
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

export const computerVisionImagesResponseSchema = z.object({
  moreResults: z.boolean(),
  data: z.array(computerVisionImageSchema),
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
