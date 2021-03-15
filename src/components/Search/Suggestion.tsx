import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherFromApi } from '../../store/actions/weather';
import { SuggestionItemContainer } from "../../containers/Search/SuggestionItemContainer";

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchWeatherFromApi(props.label.split(',')[0]));
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return <SuggestionItemContainer onClick={onClick}>{props.label}</SuggestionItemContainer>;
};

export default Suggestion;
