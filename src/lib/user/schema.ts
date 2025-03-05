import { z } from "zod";

export const userProfileInfoSchema = z.object({
  bio: z.string().optional(),
  email: z.string(),
  favouriteImages: z.string().array(),
  firstName: z.string(),
  lastName: z.string(),
  profilePicUrl: z.string(),
  userName: z.string(),
  _id: z.string(),
});

export const userProfileInfoUpdateSchema = z.object({
  firstName: z.string().nonempty({ message: "First name cannot be empty" }),
  lastName: z.string().nonempty({ message: "Last name cannot be empty" }),
  email: z.string().nonempty({ message: "Username cannot be empty" }),
  userName: z.string().nonempty({ message: "Email cannot be empty" }),
  bio: z.string(),
});
