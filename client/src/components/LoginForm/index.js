/* eslint-disable*/
import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import TextField from 'material-ui/TextField'
import { RaisedButton } from 'material-ui'
import Immutable from 'immutable'

/**
 * 
 * 
 * @param {Immutable.Map} values 
 * @returns 
 */
const validate = values => {
  const errors = {}
  const requiredFields = ['username', 'password']
  requiredFields.forEach(field => {
    if (!values.get(field)) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component={renderTextField} label="Username" />
      <Field type="password" name="password" component={renderTextField} label="Password" />
      <RaisedButton fullWidth={true} secondary={true} type="submit" disabled={submitting}>
        Submit
      </RaisedButton>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
})(MaterialUiForm)
