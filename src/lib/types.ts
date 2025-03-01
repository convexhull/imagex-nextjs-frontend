// Libs
import { z } from "zod";
// Schemas
import {
  ImageSchema,
  pixabayImagesResponseSchema,
  unsplashImagesResponseSchema,
} from "./schema";

export type LoginFormState = {
  validationErrors: Record<string, string[] | undefined>;
};

export enum Platform {
  UNSPLASH = "unsplash",
  PIXABAY = "pixabay",
}

export type Image = z.infer<typeof ImageSchema>;

export type UnsplashImagesResponse = z.infer<
  typeof unsplashImagesResponseSchema
>;

export type PixabayImagesRespone = z.infer<typeof pixabayImagesResponseSchema>;
