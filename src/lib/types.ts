// Libs
import { z } from "zod";
// Schemas
import { imageSchema, unsplashImageSchema, pixabayImageSchema } from "./schema";

export type LoginFormState = {
  validationErrors: Record<string, string[] | undefined>;
};

export enum Platform {
  UNSPLASH = "unsplash",
  PIXABAY = "pixabay",
}

export type Image = z.infer<typeof imageSchema>;
export type UnsplashImage = z.infer<typeof unsplashImageSchema>;
export type PixabayImage = z.infer<typeof pixabayImageSchema>;
