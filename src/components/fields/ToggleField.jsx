import React from 'react';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, Toggle } from 'rsuite';

const InputComponet = ({
  label,
  name,
  input, // { name, value, onChange, onBlur }
  meta: { touched, error },
  // ...props
  ...field
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <Toggle
        {...input}
        // {...props}
        defaultChecked
        onChange={checked => {
          field.onChange(checked);
        }}
      />
      {touched[field.name] && error[field.name] && (
        <HelpBlock style={{ color: 'red' }}>{error[field.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const ToogleField = props => {
  const { label, name, placeholder } = props;
  return (
    <Field
      name={name}
      component={InputComponet}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default ToogleField;
