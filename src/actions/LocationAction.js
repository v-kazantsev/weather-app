import {
  CITY_ADDED,
  CITY_REMOVED,
  FETCH_WEATHER_DATA_STARTED,
  WEATHER_DATA_RECEIVED,
  FETCH_WEATHER_DATA_FINISHED,
  FETCH_WEATHER_DATA_FAILED } from './LocationConstants';
  import { API_KEY} from '../API_KEY';

const fetchWeatherData = (name) => {
  const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`);
  return await apiCall.json();
};

export const weatherDataReceived = (weatherData) => ({type: WEATHER_DATA_RECEIVED, payload: weatherData});

export const updateWeatherData = (city) => {
  return async dispatch => {
    try {
      dispatch(fetchWeatherDataStarted());
      let weatherData = fetchWeatherData(city.name);
      dispatch(weatherDataReceived(weatherData));
      dispatch(fetchWeatherFinished());
    } catch (error) {
      console.log(error);
      dispatch(fetchWeatherFailed);
    }
  }
};  

export const addCity = (city) => ({type: CITY_ADDED, payload: {city}})

export const removeCity = (city) => ({type: CITY_REMOVED, payload: {city}})

export const fetchWeatherDataStarted = () => {
  return {
    type: FETCH_WEATHER_DATA_STARTED
  }
};

export const fetchWeatherFinished = (city) => {
  return {
    type: FETCH_WEATHER_DATA_FINISHED,
    payload: {
      city
    }
  }
}; 

export const fetchWeatherFailed = () => {
  return {
    type: FETCH_WEATHER_DATA_FAILED,
    payload: 'Connection failed'
  }
};