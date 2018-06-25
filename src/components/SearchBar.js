import React from 'react';
import { reduxForm, Field }  from 'redux-form';
import { Button, Label, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { combineValidators, isRequired } from 'revalidate';

const mapStateToProps = state => ({
  tooManyCities: Boolean(state.location.cities.length >= 5)
})

const validate = combineValidators ({
  location: isRequired({message: 'Please input a city'})
});


const SearchBar = (props) => {
  const {handleSubmit, submitting, submit, tooManyCities, pristine} = props;
  return (
  <form onSubmit={handleSubmit(submit)}>
    <Field
      style={{width: '100%'}}
      name='location'
      component={Input}
      icon='search'
      iconPosition='left'
      placeholder='Enter a city name with the country code (e.g. New York, US)'
      action={<Button type='submit' disabled={pristine || submitting || tooManyCities} color='orange'>Search</Button>}
      />
    {tooManyCities && <Label basic>Maximum cities number is limited to 5</Label>}
  </form>
  )};

export default connect(mapStateToProps)(reduxForm({form: 'search', validate})(SearchBar));