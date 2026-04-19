import { z } from "zod";

export const registerSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(100),
  displayName: z.string().min(2).max(50),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(100),
});

export const updateProfileSchema = z.object({
  displayName: z.string().min(2).max(50),
  avatarUrl: z.string().url().optional(),
});

export const createEventSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(10).max(2000),
  imageUrl: z.string().url().optional(),
  category: z.string().min(2).max(50),
  location: z.string().min(2).max(200),
  startTime: z.iso.datetime(),
  endTime: z.iso.datetime(),
  maxAttendees: z.number().int().positive(),
});

export const updateEventSchema = createEventSchema.partial();