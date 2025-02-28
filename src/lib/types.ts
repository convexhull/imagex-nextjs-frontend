export type LoginFormState = {
  validationErrors: Record<string, string[] | undefined>;
};

export enum Platform {
  UNSPLASH = "unsplash",
  PIXABAY = "pixabay",
}
