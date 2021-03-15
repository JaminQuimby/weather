import { WeatherActionTypes } from '../actionTypes';
import { weatherInitialState } from '../states/weatherInitialState';
import { IWeatherState } from '../interfaces/weatherStateInterface';

export const weatherReducer = (state: IWeatherState = weatherInitialState, action: { type: WeatherActionTypes; payload: any }) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_START: return fetchWeatherStart(state, action);
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case WeatherActionTypes.FETCH_WEATHER_ERROR: return fetchWeatherError(state);
    default: return state;
  }
};

function fetchWeatherStart(state: IWeatherState, action: { type: WeatherActionTypes; payload: any; }) {
  return state;
}

function fetchWeatherSuccess(state: IWeatherState, action: { type: WeatherActionTypes; payload: any; }) {
  return {
    ...state,
    weatherData: action.payload.weather,
    extendedWeatherData: action.payload.forecast,
  };
}

function fetchWeatherError(state: IWeatherState) {
  return {
    ...state,
    isError: true,
  };
}

