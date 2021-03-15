import { TemperatureUnit } from '../../utilities/temperatureUnit';
import { AppActionTypes } from '../actionTypes';

export interface IAppState {
  tempUnit: TemperatureUnit;
  isLoading: boolean;
  isInitial: boolean;
  darkMode: boolean;
}

const initialState: IAppState = {
  tempUnit: TemperatureUnit.CELCIUS,
  isLoading: false,
  isInitial: true,
  darkMode: JSON.parse(localStorage.getItem('darkMode') as string) as boolean,
};

export const appReducer = (state: IAppState = initialState, action: { type: AppActionTypes; payload: any }) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_DARK_MODE: return toggleDarkMode(state);
    case AppActionTypes.CHANGE_TEMP_UNIT: return changeTempUnit(state);
    case AppActionTypes.SET_IS_LOADING: return setIsLoading(state, action);
    case AppActionTypes.SET_IS_INITIAL: return setIsInitial(state, action);
    default: return state;
  }
};

function toggleDarkMode(state: IAppState) {
  localStorage.setItem('darkMode', (!state.darkMode).toString());
  return {
    ...state,
    darkMode: !state.darkMode,
  };
}

function changeTempUnit(state: IAppState) {
  return {
    ...state,
    tempUnit: state.tempUnit === TemperatureUnit.CELCIUS ? TemperatureUnit.FAHRENHEIT : TemperatureUnit.CELCIUS,
  };
}

function setIsLoading(state: IAppState, action: { type: AppActionTypes; payload: any; }) {
  return {
    ...state,
    isLoading: action.payload,
  };
}

function setIsInitial(state: IAppState, action: { type: AppActionTypes; payload: any; }) {
  return {
    ...state,
    isInitial: action.payload,
  };
}

