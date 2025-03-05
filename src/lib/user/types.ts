import { z } from "zod";
import { userProfileInfoSchema } from "./schema";

export type UserProfileInfo = z.infer<typeof userProfileInfoSchema>;
