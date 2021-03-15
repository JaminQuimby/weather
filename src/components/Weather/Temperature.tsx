import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/appStore';
import { TemperatureUnit } from '../../utilities/temperatureUnit';
import { celciusToFahrenheit } from "../../utilities/celciusToFahrenheit";

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  const { degreeType } = useSelector((state: AppStore) => ({
    degreeType: state.app.tempUnit,
  }));

  if (degreeType === TemperatureUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;
