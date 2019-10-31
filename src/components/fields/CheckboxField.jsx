import React from 'react';
import { Field as ReduxField } from 'redux-form';
import { Checkbox, FormGroup, ControlLabel } from 'rsuite';
import PropTypes from 'prop-types';
// import { required } from './validation';

const renderCheckboxField = fields => {
  const {
    id,
    name,
    title,
    onChange,
    className,
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
        className={className}
        style={style}
      />
    </FormGroup>
  );
};
const CheckboxField = ({ id, name, title, className, style }) => {
  // const validate = [];
  // if (isRequired) {
  //   validate.push(required);
  // }
  return (
    <ReduxField
      id={id}
      name={name}
      title={title}
      // validate={validate}
      className={className}
      style={style}
      component={renderCheckboxField}
    />
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  // isRequired: PropTypes.bool,
};

CheckboxField.defaultProps = {
  title: '',
  // isRequired: false,
};
export default CheckboxField;
