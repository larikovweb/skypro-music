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
