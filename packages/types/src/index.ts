export type UserRole = "USER" | "ADMIN";

export interface User {
  _id: string;
  email: string;
  displayName: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  location: string;
  startTime: string;
  endTime: string;
  maxAttendees: number;
  createdBy: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Registration {
  _id: string;
  userId: string;
  eventId: string;
  status: "REGISTERED" | "CANCELLED";
  registeredAt: string;
}