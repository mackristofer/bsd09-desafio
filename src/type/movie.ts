import { Genre } from "./genre";
import { Review } from "./review";

export type Movie = {
    title: string;
    subTitle: string;
    year: string;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
    reviews: Review;
  };