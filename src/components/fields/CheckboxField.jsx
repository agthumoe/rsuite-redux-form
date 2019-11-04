import React from 'react';
import { Field as ReduxField } from 'redux-form';
import { Checkbox, FormGroup, ControlLabel } from 'rsuite';
import PropTypes from 'prop-types';

const renderCheckboxField = fields => {
  const {
    id,
    name,
    title,
    onChange,
    className,
    defaultChecked,
    style,
    labelColor,
    input,
    meta: { touched, error },
  } = fields;
  return (
    <FormGroup className={className} style={style}>
      <ControlLabel htmlFor={id} style={{ color: labelColor }}>
        {title}
        <span style={{ color: 'red', fontSize: 10 }}>
          {touched && error && ` * ( ${error} )`}
        </span>
      </ControlLabel>

      <Checkbox
        {...input}
        id={id}
        name={name}
        title={title}
        onChange={onChange}
        value={input.value}
        defaultChecked={defaultChecked}
        className={className}
        style={style}
      />
    </FormGroup>
  );
};
const CheckboxField = ({
  id,
  name,
  title,
  className,
  defaultChecked,
  style,
}) => {
  return (
    <ReduxField
      id={id}
      name={name}
      title={title}
      className={className}
      style={style}
      defaultChecked={defaultChecked}
      component={renderCheckboxField}
    />
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

CheckboxField.defaultProps = {
  title: '',
  defaultChecked: false,
};
export default CheckboxField;
