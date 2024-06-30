"use client"
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Notify from './Notify'
import Language from './Language'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Header = () => 
(
  <section className='flex justify-between items-center'>
    <h2 className='text-2xl font-bold leading-9 tracking-tight text-gray-900'>OneFingerIn</h2>
    <div className='flex items-center justify-center space-x-1'>
      <Link href='javascript:void(0)' className='w-[50px] h-[36px] rounded-[7px] flex items-center justify-center bg-[#BDE5FA]'>
        <Icon icon="fluent:map-20-regular" width="24" height="24" className='text-[#222C40]'/>
      </Link>
      <Link href='javascript:void(0)' className='w-[50px] h-[36px] rounded-[7px] flex items-center justify-center bg-transparent'>
        <Icon icon="iconamoon:shopping-bag-light" width="24" height="24" className='text-[#222C40]'/>
      </Link>
      <Link href='javascript:void(0)' className='w-[50px] h-[36px] rounded-[7px] flex items-center justify-center bg-transparent'>
        <Icon icon="iconamoon:information-circle-light" width="24" height="24" className='text-[#222C40]'/>
      </Link>
      <Link href='javascript:void(0)' className='w-[50px] h-[36px] rounded-[7px] flex items-center justify-center bg-transparent'>
        <Icon icon="iconoir:select-point-3d" width="24" height="24" className='text-[#222C40]'/>
      </Link>
    </div>
    <div className='flex items-center'>
      <Link href='javascript:void(0)' className='me-3'><Icon icon="solar:heart-outline" width="23" height="23"/></Link>
      <Notify></Notify>
      <Language></Language>
      <Link href='javascript:void(0)' className='ms-3'><Avatar icon={<UserOutlined />} /></Link>
    </div>
  </section>
);

export default Header;
