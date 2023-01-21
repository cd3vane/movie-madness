export interface Credentials {
  email: string;
  password: string;
}

export type Movie = {
  id: number;

  overview: string;
  poster_path: string;
  release_date?: string; //yyyy-mm-dd
  runtime?: number; // In minutes
  tagline?: string;
  title: string;
};

export type Show = {
  id: number;

  overview: string;
  poster_path: string;
  name: string;
};

export enum Category {
  movie = "movie",
  tv = "tv",
}

export type MovieCardProps = {
  movie?: Movie;
  show?: Show;
  type?: string;
};
