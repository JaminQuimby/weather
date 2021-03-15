import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import { changeDegreeType } from '../../store/actions/app';
import { AppStore } from '../../store/appStore';
import { TemperatureUnit } from '../../utilities/temperatureUnit';
import { kmToMile } from "../../utilities/kmToMile";
import WeatherIcon from '../../containers/WeatherIcon/WeatherIcon';
import { FeelsLikeContainer } from "../../containers/Weather/FeelsLikeContainer";
import { WeatherTitleContainer } from "../../containers/Weather/WeatherTitleContainer";
import { CurrentTempContainer } from "../../containers/Weather/CurrentTempContainer";
import { CurrentWeatherContainer } from "../../containers/Weather/CurrentWeatherContainer";
import { CurrentWeatherInfoContainer } from "../../containers/Weather/CurrentWeatherInfoContainer";
import { HighLowContainer } from "../../containers/Weather/HighLowContainer";
import { WeatherDegreeContainer } from "../../containers/Weather/WeatherDegreeContainer";
import { InfoRowContainer } from "../../containers/Weather/InfoRowContainer";
import { WeatherContainer } from "../../containers/Weather/WeatherContainer";
import Temperature from './Temperature';
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch';

const Weather: React.FC = () => {
  const { weather, degreeType, isInitial, isError } = useSelector((store: AppStore) => ({
    weather: store.weather.weatherData,
    degreeType: store.app.tempUnit,
    isInitial: store.app.isInitial,
    isError: store.weather.isError,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log('Cannot load weather for this place');
    }
  }, [isError]);

  if (isInitial) return <></>;

  return (
    <WeatherContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <WeatherTitleContainer>Current Weather</WeatherTitleContainer>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeDegreeType())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <CurrentTempContainer>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={weather.weather.id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <h6>{weather.weather.description}</h6>
        </CurrentTempContainer>

        <CurrentWeatherInfoContainer>
          <FeelsLikeContainer>
            Feels like <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLikeContainer>
          <HighLowContainer>
            <WeatherDegreeContainer>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegreeContainer>
            <WeatherDegreeContainer>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegreeContainer>
          </HighLowContainer>
          <InfoRowContainer>
            <div>
              <HumidityIcon /> Humidity
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRowContainer>
          <InfoRowContainer>
            <div>
              <WindIcon /> Wind
            </div>
            <span>
              {degreeType === TemperatureUnit.CELCIUS ? weather.wind.speed : kmToMile(weather.wind.speed)}
              {degreeType === TemperatureUnit.CELCIUS ? 'kph' : 'mph'}
            </span>
          </InfoRowContainer>
          <InfoRowContainer>
            <div>
              <PressureIcon /> Pressure
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRowContainer>
        </CurrentWeatherInfoContainer>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default Weather;
