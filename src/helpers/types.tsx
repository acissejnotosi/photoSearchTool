import { Nullable } from "unsplash-js/dist/helpers/typescript";

export declare interface User {
  id: string;
  bio: Nullable<string>;
  // eslint-disable-next-line camelcase
  first_name: string;
  // eslint-disable-next-line camelcase
  instagram_username: Nullable<string>;
  // eslint-disable-next-line camelcase
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
  // eslint-disable-next-line camelcase
  portfolio_url: Nullable<string>;
  // eslint-disable-next-line camelcase
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  // eslint-disable-next-line camelcase
  total_collections: number;
  // eslint-disable-next-line camelcase
  total_likes: number;
  // eslint-disable-next-line camelcase
  total_photos: number;
  // eslint-disable-next-line camelcase
  twitter_username: Nullable<string>;
  // eslint-disable-next-line camelcase
  updated_at: string;
  username: string;
}

export declare interface Basic {
  // eslint-disable-next-line camelcase
  created_at: string;
  // eslint-disable-next-line camelcase
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  id: string;
  // eslint-disable-next-line camelcase
  alt_description: Nullable<string>;
  // eslint-disable-next-line camelcase
  blur_hash: Nullable<string>;
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    // eslint-disable-next-line camelcase
    download_location: string;
  };
  // eslint-disable-next-line camelcase
  promoted_at: Nullable<string>;
  width: number;
  user: User;
}

export declare interface Photos {
  results: Basic[];
  total: number;
  // eslint-disable-next-line camelcase
  total_pages: number;
}

export declare interface Data {
  type: "success";
  response: Photos;
  originalResponse: Response;
  errors?: undefined;
  status: number;
}