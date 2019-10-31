import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { FormGroup, Radio, RadioGroup } from 'rsuite';

const renderRadioField = fields => {
  const {
    title,
    name,
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
      <RadioGroup>
        <Radio
          name={name}
          title={title}
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
  name,
  title,
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
    title={title}
    name={name}
    id={id}
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
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  inline: PropTypes.bool,
};

RadioField.defaultProps = {
  title: '',
  isRequired: false,
  disabled: false,
  defaultChecked: false,
  checked: false,
  inline: false,
};

export default RadioField;
