import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormGroup, Radio, RadioGroup, ControlLabel } from 'rsuite';
import { required } from './validation';

const renderRadioField = fields => {
  const {
    title,
    name,
    className,
    style,
    id,
    input: { value, onChange, ...rest },
    meta: { touched, error },
    disabled,
    defaultChecked,
    inline,
    input,
    labelColor,
  } = fields;
  return (
    <FormGroup className="pt-3 m-0" style={style}>
      <ControlLabel htmlFor={id} style={{ color: labelColor }}>
        {title}
        <span style={{ color: 'red', fontSize: 10 }}>
          {touched && error && ` * ( ${error} )`}
        </span>
      </ControlLabel>
      <RadioGroup>
        <Radio
          {...input}
          name={name}
          title={title}
          className={className}
          value={input.value}
          onChange={onChange}
          {...rest}
          id={id}
          disabled={disabled}
          defaultChecked={defaultChecked}
          inline={inline}
        />
      </RadioGroup>
    </FormGroup>
  );
};

const RadioField = ({
  name,
  title,
  id,
  className,
  language,
  style,
  isRequired,
}) => {
  const validate = [];
  if (isRequired) {
    validate.push(required);
  }
  return (
    <Field
      component={renderRadioField}
      title={title}
      name={name}
      id={id}
      className={className}
      style={style}
      language={language}
      validate={validate}
    />
  );
};

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
};

RadioField.defaultProps = {
  title: '',
  isRequired: false,
};

export default RadioField;
