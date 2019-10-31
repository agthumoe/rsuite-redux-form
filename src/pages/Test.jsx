import React from 'react';
import { Form } from 'rsuite';
import { reduxForm } from 'redux-form';
import TagPickerField from '../components/fields/TagPickerField';
import Field from '../components/fields/Field';
import SelectPickerField from '../components/fields/SelectPickerField';
import ToogleField from '../components/fields/ToggleField';

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
      />
      <SelectPickerField
        data={data}
        name="data"
        label="Data"
        placeholder="data"
        searchable={false}
      />
      <Field name="name" id="name" />
      <ToogleField name="enable" id="enable" />
    </Form>
  );
};

export default reduxForm({ form: formName })(Test);
