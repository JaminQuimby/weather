export interface IWeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export interface IExtendedForecastData {
  day: string;
  temp: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  };
}

export interface ILocationQuery {
  hits?: (IHitsEntity)[] | null;
  nbHits: number;
  processingTimeMS: number;
  query: string;
  params: string;
  degradedQuery: boolean;
}
export interface IHitsEntity {
  country: string;
  is_country: boolean;
  is_highway: boolean;
  importance: number;
  _tags?: (string)[] | null;
  postcode?: (string)[] | null;
  county?: (string)[] | null;
  population: number;
  country_code: string;
  is_city: boolean;
  is_popular: boolean;
  administrative?: (string)[] | null;
  admin_level: number;
  is_suburb: boolean;
  locale_names?: (string)[] | null;
  _geoloc: IGeoloc;
  objectID: string;
  _highlightResult: HighlightResult;
  village?: (string)[] | null;
}
export interface IGeoloc {
  lat: number;
  lng: number;
}
export interface HighlightResult {
  country: IStaticEntity;
  postcode?: (IStaticEntity)[] | null;
  county?: (IStaticEntity)[] | null;
  administrative?: (IStaticEntity)[] | null;
  locale_names?: (ILocaleNamesEntity)[] | null;
  village?: (IStaticEntity)[] | null;
}
/* Postcode Entity Or County Entity Or Country Entity Or Village Entity */
export interface IStaticEntity {
  value: string;
  matchLevel: string;
  matchedWords?: (string)[] | null;
}
export interface ILocaleNamesEntity extends IStaticEntity {
  fullyHighlighted: boolean;
}
