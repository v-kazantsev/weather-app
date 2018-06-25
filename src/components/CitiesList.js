import React from 'react';
import { connect} from 'react-redux';
import LocationItem from './LocationItem';

const mapStateToProps = state => ({
  cities: state.location.cities
})

const CitiesList = ({cities}) => {
  return (
    <div>
      {cities && cities.map(city => (
        <LocationItem key={city.id} city={city} />
      ))}
    </div>
  )
};

export default connect(mapStateToProps)(CitiesList);