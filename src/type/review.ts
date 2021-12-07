import { User } from "./user";

export type Review = {
  text: string;
  movieId: number;
  user: User;
};