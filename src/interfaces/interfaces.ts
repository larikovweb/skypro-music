export interface ITrack {
  id: string | number;
  name: string;
  artist: string;
  album: string;
  duration: string;
  year: number;
  genre: string;
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
}

export interface ICity {
  region: string;
  name: string;
}

export interface ISelect {
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IOrder {
  id: number;
  name: string;
  address: string;
  date: string;
  price: string;
  mode: 'common' | 'vip' | 'premium';
  params: {
    age: number;
    revenue: number;
    payback: number;
    receipt: number;
    type: string;
    category: string;
    revenue_age: number;
    profit: number;
    who: string;
    staff: number;
    office: string;
  };
  images: string[];
  descr: string;
}

export interface IArticle {
  id: number;
  title: string;
  descr: string;
  image: string;
}

export interface IFilter {
  [key: string]: any;
  online?: boolean;
  offline?: boolean;
  franchise?: boolean;
  investments?: boolean;
  category?: string;
  price?: number[];
  city?: { name: string };
  revenue?: number[];
  profit?: number[];
  publish?: string;
  who?: string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface ISettings {
  name: string;
  birthday: string;
  phone: string;
  email: string;
  city: string;
  oldPassword: string;
  newPassword: string;
}
