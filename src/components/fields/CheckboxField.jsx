import React from 'react';
import { Field as ReduxField } from 'redux-form';
import { Checkbox, CheckboxGroup, FormGroup } from 'rsuite';
import PropTypes from 'prop-types';

const renderField = fields => {
  const {
    id,
    name,
    title,
    inline,
    checked,
    isRequired,
    defaultChecked,
    onChange,
    disabled,
    className,
    style,
    // meta: { touched, error },
  } = fields;
  return (
    <FormGroup
      // error={touched && error && true}
      className={className}
      style={style}
    >
      <CheckboxGroup>
        <Checkbox
          id={id}
          name={name}
          title={title}
          inline={inline}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          isRequired={isRequired}
          disabled={disabled}
          className={className}
          style={style}
          component={renderField}
        />
      </CheckboxGroup>
    </FormGroup>
  );
};
const CheckboxField = ({
  id,
  name,
  title,
  inline,
  checked,
  defaultChecked,
  onChange,
  isRequired,
  disabled,
  className,
  style,
}) => (
  <ReduxField
    id={id}
    name={name}
    title={title}
    inline={inline}
    checked={checked}
    isRequired={isRequired}
    defaultChecked={defaultChecked}
    onChange={onChange}
    disabled={disabled}
    className={className}
    style={style}
    component={renderField}
  />
);

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.bool,
  isRequired: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  inline: PropTypes.bool,
};

CheckboxField.defaultProps = {
  title: '',
  isRequired: false,
  disabled: false,
  defaultChecked: false,
  checked: false,
  onChange: false,
  inline: false,
};
export default CheckboxField;
