
import { Icon } from '@iconify/react';
import Image from "next/image";
import { Button } from 'antd';
import Link from 'next/link';

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const Header = () => 
(
  <section className='grid grid-cols-2 gap-4 mt-5'>
    <div className='bg-white p-3 rounded-[14px] shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-6 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-full h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-3.png' alt="hill" fill style={{ objectFit: 'cover' }} priority/>
                </div>
            </div>
            <div className='col-span-4'>
                <span className='w-full'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[18px] leading-[20px] font-semibold text-[#222C40]'>Galenstock</h2>
                        <Link href='#'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </Link>
                    </div>
                    <span className='flex items-center justify-start'>
                        <Icon icon="ph:star-fill" width="16" height="16" className='text-[#82CFF1]'/>
                        <span className='text-[#222C40] text-[14px] font-semibold ms-1'>4.9 
                            <span className='text-[#222C40]/[0.5]'>(75)</span>
                            <span className='ms-3'>2.2km</span>
                        </span>
                    </span>
                    <div className='flex items-center justify-between mt-5'>
                        <h2 className='text-[18px] leading-[20px] font-bold text-[#222C40]'>$360
                            <span className='text-[#222C40] text-[13px]'>/night</span>
                        </h2>
                        <Button type="primary" className='bg-[#222C40] rounded-md flex items-center justify-center'>Details</Button>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div className='bg-white p-3 rounded-[14px] shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-6 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-full h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-2.png' alt="hill" fill style={{ objectFit: 'cover' }} priority/>
                </div>
            </div>
            <div className='col-span-4'>
                <span className='w-full'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[18px] leading-[20px] font-semibold text-[#222C40]'>Galenstock</h2>
                        <Link href='#'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </Link>
                    </div>
                    <span className='flex items-center justify-start'>
                        <Icon icon="ph:star-fill" width="16" height="16" className='text-[#82CFF1]'/>
                        <span className='text-[#222C40] text-[14px] font-semibold ms-1'>4.9 
                            <span className='text-[#222C40]/[0.5]'>(75)</span>
                            <span className='ms-3'>2.2km</span>
                        </span>
                    </span>
                    <div className='flex items-center justify-between mt-5'>
                        <h2 className='text-[18px] leading-[20px] font-bold text-[#222C40]'>$360
                            <span className='text-[#222C40] text-[13px]'>/night</span>
                        </h2>
                        <Button type="primary" className='bg-[#222C40] rounded-md flex items-center justify-center'>Details</Button>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div className='bg-white p-3 rounded-[14px] shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-6 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-full h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-1.png' alt="hill" fill style={{ objectFit: 'cover' }} priority/>
                </div>
            </div>
            <div className='col-span-4'>
                <span className='w-full'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[18px] leading-[20px] font-semibold text-[#222C40]'>Galenstock</h2>
                        <Link href='#'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </Link>
                    </div>
                    <span className='flex items-center justify-start'>
                        <Icon icon="ph:star-fill" width="16" height="16" className='text-[#82CFF1]'/>
                        <span className='text-[#222C40] text-[14px] font-semibold ms-1'>4.9 
                            <span className='text-[#222C40]/[0.5]'>(75)</span>
                            <span className='ms-3'>2.2km</span>
                        </span>
                    </span>
                    <div className='flex items-center justify-between mt-5'>
                        <h2 className='text-[18px] leading-[20px] font-bold text-[#222C40]'>$360
                            <span className='text-[#222C40] text-[13px]'>/night</span>
                        </h2>
                        <Button type="primary" className='bg-[#222C40] rounded-md flex items-center justify-center'>Details</Button>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div className='bg-white p-3 rounded-[14px] shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-6 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-full h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-1.png' alt="hill" fill style={{ objectFit: 'cover' }} priority/>
                </div>
            </div>
            <div className='col-span-4'>
                <span className='w-full'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-[18px] leading-[20px] font-semibold text-[#222C40]'>Galenstock</h2>
                        <Link href='#'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </Link>
                    </div>
                    <span className='flex items-center justify-start'>
                        <Icon icon="ph:star-fill" width="16" height="16" className='text-[#82CFF1]'/>
                        <span className='text-[#222C40] text-[14px] font-semibold ms-1'>4.9 
                            <span className='text-[#222C40]/[0.5]'>(75)</span>
                            <span className='ms-3'>2.2km</span>
                        </span>
                    </span>
                    <div className='flex items-center justify-between mt-5'>
                        <h2 className='text-[18px] leading-[20px] font-bold text-[#222C40]'>$360
                            <span className='text-[#222C40] text-[13px]'>/night</span>
                        </h2>
                        <Button type="primary" className='bg-[#222C40] rounded-md flex items-center justify-center'>Details</Button>
                    </div>
                </span>
            </div>
        </div>
    </div>
  </section>
);

export default Header;
       