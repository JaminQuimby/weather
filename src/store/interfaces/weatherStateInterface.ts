import { IExtendedForecastData, IWeatherData } from '../../api/types';

export interface IWeatherState {
  weatherData: IWeatherData;
  extendedWeatherData: IExtendedForecastData[];
  isError: boolean;
}
