import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.email("invalid email address").max(200),
    message: z.string().trim().min(10, "Message is too short").max(5000),
    website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;