import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { FormGroup, ControlLabel, HelpBlock, TagPicker } from 'rsuite';
import { required } from './validation';

const renderField = ({
  label,
  field,
  data,
  input,
  meta: { touched, error },
  placeholder,
  style,
  ...props
}) => {
  return (
    <FormGroup className="mt-2">
      <ControlLabel>{label}</ControlLabel>
      <TagPicker
        data={data}
        style={style}
        {...props}
        defaultValue={input.value}
        placeholder={placeholder}
        onChange={input.onChange}
        block
      />

      {touched && error && (
        <HelpBlock style={{ color: 'red' }}>
          {touched && error ? `* ( ${error} )` : undefined}
        </HelpBlock>
      )}
    </FormGroup>
  );
};

const TagPickerField = props => {
  const {
    label,
    name,
    componentClass,
    placeholder,
    type,
    data,
    style,
    isRequired,
  } = props;

  const validate = [];
  if (isRequired) {
    validate.push(required);
  }

  return (
    <ReduxField
      name={name}
      style={style}
      type={type}
      component={renderField}
      label={label}
      componentClass={componentClass}
      placeholder={placeholder}
      data={data}
      validate={validate}
    />
  );
};

TagPickerField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['number', 'text']),
  isRequired: PropTypes.bool,
};

TagPickerField.defaultProps = {
  type: 'text',
  isRequired: false,
};
export default TagPickerField;
