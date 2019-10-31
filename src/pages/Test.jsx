import React from 'react';
import { Form } from 'rsuite';
import { reduxForm } from 'redux-form';
import TagPickerField from '../components/fields/TagPickerField';
import Field from '../components/fields/Field';
<<<<<<< HEAD
import RadioField from '../components/fields/RadioField';
=======
import SelectPickerField from '../components/fields/SelectPickerField';
import ToogleField from '../components/fields/ToggleField';
>>>>>>> 2f837cba4e6e0e477de83a4f3c4fd2defdd722bd

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
      <RadioField name="gender" id="gender" checked />
      <ToogleField name="enable" id="enable" />
    </Form>
  );
};

export default reduxForm({ form: formName })(Test);
