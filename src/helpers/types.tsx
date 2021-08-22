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
