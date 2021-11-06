export interface SWCharacter {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<String>;
  species?: Array<String>;
  vehicles?: Array<String>;
  starships?: Array<String>;
  created: Date;
  edited: Date;
  url: string;
}

export interface Page {
  count: number;      // total of characters
  next: string;       // URL of the next page
  previous: string;   // URL of the previous page
  results: Array<SWCharacter>;  // current page characters
}
