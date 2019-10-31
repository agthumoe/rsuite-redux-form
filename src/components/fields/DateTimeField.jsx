import React from 'react';
import { DatePicker, FormGroup } from 'rsuite';
import { Field as ReduxField } from 'redux-form';
import PropTypes from 'prop-types';

const renderField = fields => {
  const { dateTimeFormat, input } = fields;

  return (
    <FormGroup>
      <DatePicker
        oneTap
        // className={styles.dateTimeInput}
        {...input}
        format={dateTimeFormat}
      />
    </FormGroup>
  );
};

const DateTimeField = ({ dateTimeFormat, name, type, id, ...rest }) => (
  <ReduxField
    {...rest}
    name={name}
    type={type}
    id={id}
    dateTimeFormat={dateTimeFormat}
    component={renderField}
  />
);

DateTimeField.propTypes = {
  dateTimeFormat: PropTypes.string,
};

DateTimeField.defaultProps = {
  dateTimeFormat: 'MMM DD YYYY HH:mm A ',
};
export default DateTimeField;
