import createReducer from './createReducer';
import {
  CITY_ADDED,
  CITY_REMOVED,
  FETCH_WEATHER_DATA_STARTED,
  WEATHER_DATA_RECEIVED,
  FETCH_WEATHER_DATA_FINISHED,
  FETCH_WEATHER_DATA_FAILED } from '../actions/LocationConstants';

const initialState = {
  isLoading: false,
  cities:  [
    {
      id: '1',
      name: 'Moscow, RU',
    }
]};

const fetchWeather = (state, payload) => {
  return payload;
}

const addCity = (state, payload) => {
  return {...state, cities: [...state.cities, Object.assign({}, payload.city)]}
};

const removeCity = (state, payload) => {
  return {...state, cities: [...state.cities.filter(city => city.id !== payload.city.id)]}
};

const fetchWeatherDataStarted = (state) => {
  return {...state, isLoading: true}
};

const fetchWeatherDataFinished = (state) => {
  return {...state, isLoading: false}
};

const fetchWeatherDataFailed = (state) => {
  return {...state, isLoading: false}
};

export default createReducer(initialState, {
  [CITY_ADDED]: addCity,
  [CITY_REMOVED]: removeCity,
  [FETCH_WEATHER_DATA_STARTED]: fetchWeatherDataStarted,
  [WEATHER_DATA_RECEIVED]: fetchWeather,
  [FETCH_WEATHER_DATA_FINISHED]: fetchWeatherDataFinished,
  [FETCH_WEATHER_DATA_FAILED]: fetchWeatherDataFailed
});