/* eslint-disable camelcase */
import { Nullable } from "unsplash-js/dist/helpers/typescript";

export declare interface User {
  id: string;
  bio: Nullable<string>;
  first_name: string;
  instagram_username: Nullable<string>;
  last_name: Nullable<string>;
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
  portfolio_url: Nullable<string>;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: Nullable<string>;
  updated_at: string;
  username: string;
}

export declare interface Basic {
  created_at: string;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  id: string;
  alt_description: Nullable<string>;
  blur_hash: Nullable<string>;
  categories: string[];
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: Nullable<string>;
  width: number;
  user: User;
}

export declare interface Photos {
  results: Basic[];
  total: number;
  total_pages: number;
}

export declare interface Data {
  type: "success";
  response: Photos;
  original_response: Response;
  errors?: undefined;
  status: number;
}

export declare type Color =
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

export type Orientation = "landscape" | "portrait" | "squarish";

export declare type OrderBy = "relevant" | "latest";

export declare interface Query {
  query: string;
  page?: number;
  per_page?: number;
  orientation?: Orientation;
  content_filter?: ContentFilter;
  color?: Color;
  order_by?: OrderBy;
  collection_ids?: [];
  Language?: string;
}
