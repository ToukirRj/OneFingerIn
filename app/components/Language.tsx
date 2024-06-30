import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Space wrap className='flex'>
    <Select
      defaultValue="ENG"
      onChange={handleChange}
      options={[
        { value: 'ENG', label: 'ENG' },
        { value: 'GER', label: 'GER' },
        { value: 'TUR', label: 'TUR' }
      ]}
    />
  </Space>
);

export default App;