import React from 'react';
import { Form } from 'rsuite';
import { reduxForm } from 'redux-form';
import TagPickerField from '../components/fields/TagPickerField';
import RadioField from '../components/fields/RadioField';
import SelectPickerField from '../components/fields/SelectPickerField';
import ToogleField from '../components/fields/ToggleField';
import CheckboxField from '../components/fields/CheckboxField';

const formName = 'adminCreateForm';
const Test = () => {
  const data = [
    {
      label: 'label1',
      value: '1',
    },
    {
      label: 'label2',
      value: '2',
    },
  ];
  return (
    <Form>
      <TagPickerField
        data={data}
        name="branch"
        label="Branch"
        placeholder="branch"
        type="text"
        style={{ width: '240px' }}
      />
      <SelectPickerField
        style={{ width: 300 }}
        data={data}
        name="data"
        label="Data"
        placeholder="data"
        searchable={false}
        cleanable={false}
      />
      {/* <Field name="name" id="name" /> */}
      <RadioField name="gender" id="gender" />
      <ToogleField name="enable" id="enable" />
      <CheckboxField name="test" id="test" />
    </Form>
  );
};

export default reduxForm({ form: formName })(Test);
