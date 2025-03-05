import { z } from "zod";
import { userProfileInfoSchema, userProfileInfoUpdateSchema } from "./schema";

export type UserProfileInfo = z.infer<typeof userProfileInfoSchema>;
export type UserProfileUpdateInfo = z.infer<typeof userProfileInfoUpdateSchema>;
