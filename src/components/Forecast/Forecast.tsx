import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import ForecastItem from './ForecastItem';
import { ForecastItemsContainer } from "../../containers/Forecast/ForecastItemsContainer";
import { SectionTitleContainer } from "../../containers/Forecast/SectionTitleContainer";
import { ForecastContainer } from "../../containers/Forecast/ForecastContainer";

const Forecast: React.FC = () => {
  const { forecast, isInitial } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial,
    forecast: state.weather.extendedWeatherData,
  }));

  if (isInitial) return <></>;

  return (
    <ForecastContainer>
      <SectionTitleContainer>Extended Forecast</SectionTitleContainer>
      <ForecastItemsContainer>
        {forecast.map((item, i) => {
          return (
            <ForecastItem
              key={i}
              day={item.day}
              high={item.temp.temp_max}
              low={item.temp.temp_min}
              weatherCode={item.weather.id}
              main={item.weather.main}
            />
          );
        })}
      </ForecastItemsContainer>
    </ForecastContainer>
  );
};

export default Forecast;
