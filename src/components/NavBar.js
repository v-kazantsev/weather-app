import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import SearchBar from './SearchBar';
import { addCity } from '../actions/LocationAction';
import { API_KEY } from '../API_KEY';

const actions = {
  addCity
};

class NavBar extends React.Component {
  submit = async (values) => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${values.location}&appid=${API_KEY}&units=metric`);
    const weatherData = await apiCall.json();
    const newCity = {
      id: cuid(),
      name: values.location,
      temperature: weatherData.main.temp,
      pressure: weatherData.main.pressure,
      description: weatherData.weather[0].description
    };
    this.props.addCity(newCity);
  };
  
  render() {
  return (
    <Grid.Row verticalAlign='middle' style={{height: 150, backgroundColor: 'dodgerblue'}}>
      <Grid.Column />
      <Grid.Column>
        <SearchBar onSubmit={this.submit} />
      </Grid.Column>
      <Grid.Column />
    </Grid.Row>
	);
 }
};
export default connect(null, actions)(NavBar);