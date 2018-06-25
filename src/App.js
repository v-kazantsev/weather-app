import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Grid } from 'semantic-ui-react';
import CitiesList from './components/CitiesList';

class App extends Component {
  render() {
    return (
      <Grid columns={3} style={{height: '100%'}}>
        <NavBar />
        <Grid.Row >
          <Grid.Column width={3} color='yellow' />
          <Grid.Column width={10} >
            <CitiesList />
          </Grid.Column>
          <Grid.Column width={3} color='orange' />
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
