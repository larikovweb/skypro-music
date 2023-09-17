export interface ITrack {
  album: string;
  author: string;
  duration_in_seconds: number;
  genre: string;
  id: number;
  logo: string | null;
  name: string;
  release_date: string;
  stared_user: any[];
  track_file: string;
}

export interface ISelectOption {
  label: string | number;
  value: string | number;
}

export type Rec<K extends keyof any = any, T = any> = Record<K, T>;

export type Nullable<T> = T | undefined | null;

export interface IAuthResult {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
  access: string;
  refresh: string;
}
