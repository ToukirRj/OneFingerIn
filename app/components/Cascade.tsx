import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

const { SHOW_CHILD } = Cascader;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    label: 'Low Cost',
    value: 'Low Cost',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Low Cost ${index}`, value: index })),
  },
  {
    label: 'Popular',
    value: 'Popular',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Popular ${index}`, value: index })),
  },
];

const App: React.FC = () => {
  const onChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{ width: '100%', height:'36px' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={[['Low Cost']]}
      />
    </>
  );
};

export default App;