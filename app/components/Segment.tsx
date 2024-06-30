
import React from 'react';
import { Segmented } from 'antd';

const Demo: React.FC = () => (
  <Segmented<string>
    options={['Hotel', 'House', 'Village']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
);

export default Demo;