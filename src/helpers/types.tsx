import { Nullable } from "unsplash-js/dist/helpers/typescript";

export declare interface User {
  id: string;
  bio: Nullable<string>;
  firstName: string;
  instagramUsername: Nullable<string>;
  lastName: Nullable<string>;
  links: {
    followers: string;
    following: string;
    html: string;
    likes: string;
    photos: string;
    portfolio: string;
    self: string;
  };
  location: Nullable<string>;
  name: string;
  portfolioUrl: Nullable<string>;
  profileImage: {
    small: string;
    medium: string;
    large: string;
  };
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
  twitterUsername: Nullable<string>;
  updatedAt: string;
  username: string;
}

export declare interface Basic {
  createdAt: string;
  updatedAt: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  id: string;
  altDescription: Nullable<string>;
  blurHash: Nullable<string>;
  categories: string[];
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    downloadLocation: string;
  };
  promotedAt: Nullable<string>;
  width: number;
  user: User;
}

export declare interface Photos {
  results: Basic[];
  total: number;
  totalPages: number;
}

export declare interface Data {
  type: "success";
  response: Photos;
  originalResponse: Response;
  errors?: undefined;
  status: number;
}

type Color =
  | "black_and_white"
  | "black"
  | "white"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "magenta"
  | "green"
  | "teal"
  | "blue";

type ContentFilter = "low" | "high";

type Orientation = "landscape" | "portrait" | "squarish";

type OrderBy = "low" | "high";

export declare interface Query {
  query: string;
  page?: number;
  perPage?: number;
  orientation?: Orientation;
  contentFilter?: ContentFilter;
  color?: Color;
  SearchOrderBy?: OrderBy;
  collectionIds?: [];
  Language?: string;
}
