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
  style,
  cleanable,
  ...props
}) => {
  return (
    <FormGroup className="mt-3">
      <ControlLabel htmlFor={id}>{label}</ControlLabel>
      <SelectPicker
        style={style}
        data={data}
        {...props}
        {...input}
        defaultValue={input.value}
        searchable={searchable}
        placeholder={placeholder}
        cleanable={cleanable}
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
    style,
    cleanable,
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
      cleanable={cleanable}
      componentClass={componentClass}
      placeholder={placeholder}
      data={data}
      validate={validate}
      style={style}
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
