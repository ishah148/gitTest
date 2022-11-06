export type RickAndMortyApiResponce = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: RickAndMortyApiItem[];
  error?: string;
};

export type RickAndMortyApiItem = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type RickAndMortyApiFilterQuery = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};
// status?: 'alive' | 'dead' | 'unknown' | '';
// gender?: 'female' | 'male' | 'genderless ' | 'unknown' | '';
