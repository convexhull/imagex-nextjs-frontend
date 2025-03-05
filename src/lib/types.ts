// Libs
import { z } from "zod";
// Schemas
import {
  imageSchema,
  unsplashImageSchema,
  pixabayImageSchema,
  computerVisionImageSchema,
  signupFormSchema,
  loginFormSchema,
  favouriteImageSchema,
} from "./schema";

export type LoginFormState = {
  validationErrors: Record<string, string[] | undefined>;
};

export enum Platform {
  UNSPLASH = "unsplash",
  PIXABAY = "pixabay",
  COMPUTER_VISION = "computerVision",
}

export type Image = z.infer<typeof imageSchema>;
export type UnsplashImage = z.infer<typeof unsplashImageSchema>;
export type PixabayImage = z.infer<typeof pixabayImageSchema>;
export type ComputerVisionImage = z.infer<typeof computerVisionImageSchema>;
export type FavouriteImage = z.infer<typeof favouriteImageSchema>;

export type SignupFormData = z.infer<typeof signupFormSchema>;
export type LoginFormData = z.infer<typeof loginFormSchema>;
