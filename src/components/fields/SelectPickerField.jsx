import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, SelectPicker } from 'rsuite';
import { required } from './validation';

const InputComponet = ({
  componentClass,
  label,
  field,
  type,
  data,
  id,
  placeholder,
  searchable,
  meta: { touched, error },
  input,
  ...props
}) => {
  return (
    <FormGroup className="mt-3">
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <SelectPicker
        style={{ width: 224 }}
        data={data}
        {...props}
        {...input}
        defaultValue={input.value}
        searchable={searchable}
        placeholder={placeholder}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>{error}</HelpBlock>
      )}
    </FormGroup>
  );
};

const SelectPickerField = props => {
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    data,
    isRequired,
    searchable,
  } = props;
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }

  return (
    <Field
      name={name}
      type={type}
      component={InputComponet}
      label={label}
      searchable={searchable}
      componentClass={componentClass}
      placeholder={placeholder}
      data={data}
      validate={validate}
    />
  );
};

SelectPickerField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['number', 'text']),
  isRequired: PropTypes.bool,
};

SelectPickerField.defaultProps = {
  type: 'text',
  isRequired: false,
};

export default SelectPickerField;
