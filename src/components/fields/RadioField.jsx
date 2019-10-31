import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormGroup, Radio, RadioGroup } from 'rsuite';

const renderRadioField = fields => {
  const {
    name,
    label,
    className,
    style,
    id,
    input: { value, onChange, ...rest },
    // meta: { touched, error },
    disabled,
    isRequired,
    checked,
    defaultChecked,
    inline,
  } = fields;
  return (
    <FormGroup className="pt-3 m-0" style={style}>
      <label className={className}>{label}</label>
      <RadioGroup>
        <Radio
          name={name}
          label={label}
          // options={[
          //   { label: 'Male', value: 'MALE' },
          //   { label: 'Female', value: 'FEMALE' },
          //   { label: 'Other', value: '' },
          // ]}
          className={className}
          value="A"
          onChange={onChange}
          {...rest}
          id={id}
          disabled={disabled}
          isRequired={isRequired}
          defaultChecked={defaultChecked}
          checked={checked}
          inline={inline}
        />
      </RadioGroup>
    </FormGroup>
  );
};

const RadioField = ({
  label,
  name,
  id,
  className,
  language,
  style,
  disabled,
  isRequired,
  defaultChecked,
  checked,
  inline,
}) => (
  <Field
    component={renderRadioField}
    name={name}
    id={id}
    label={label}
    className={className}
    style={style}
    language={language}
    disabled={disabled}
    isRequired={isRequired}
    defaultChecked={defaultChecked}
    checked={checked}
    inline={inline}
  />
);

RadioField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  inline: PropTypes.bool,
};

RadioField.defaultProps = {
  label: '',
  isRequired: false,
  disabled: false,
  defaultChecked: false,
  checked: false,
  inline: false,
};

export default RadioField;
