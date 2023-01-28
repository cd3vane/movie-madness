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
  vote_count?: number;
  vote_average?: number;
  genres?: any;
};

export type ProfileProps = {
  profile: Profile;
};

export type Profile = {
  user: User;
  firstName: string;
  lastName: string;
  location?: string;
  social?: any;
  bio: string;
  date: Date;
  watchedCount: number;
  numberOfLists: number;
  followers: User[];
  following: User[];
};

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  avatar?: string;
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
