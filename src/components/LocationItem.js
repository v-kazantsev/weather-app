import React from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeCity } from '../actions/LocationAction';

const actions = {
  removeCity
};

const mapStateToProps = state => ({
  loading: state.isLoading
});

const LocationItem = ({city, removeCity, loading}) => {
  return (
    <Segment.Group>
      <Segment>
        <Header color='teal' style={{textTransform: 'uppercase'}}>
          {city.name}
        </Header>
      </Segment>
      <Segment.Group>
        <Segment>Temperature: {city.temperature}</Segment>
        <Segment>Pressure: {city.pressure}</Segment>
        <Segment>Condition: {city.description}</Segment>
        </Segment.Group>
        <Button content='Refresh' color='orange' circular style={{marginBottom: '10px', marginLeft: '10px'}} />
        <Button content='Remove' color='red' circular style={{marginBottom: '10px'}} onClick={() => removeCity(city)} />
    </Segment.Group>
  );
};

export default connect(mapStateToProps, actions)(LocationItem);