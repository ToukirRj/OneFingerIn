
import React from 'react';
import Image from "next/image";
import { Carousel } from 'antd';
import { Icon } from '@iconify/react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: '#fff',
  textAlign: 'center',
};

const App: React.FC = () => (
  <>
    <div className='mt-6'>
        <h1 className='text-[22px] leading-[22px] font-semibold text-[#192338] mb-0'>Suitable Options</h1>
        <h5 className='text-sm font-semibold text-[#6d7788]'>Recommended hotels in area</h5>
        <Carousel arrows infinite={true}>
            <div>
                <div className='grid grid-cols-3 space-x-2 my-3'>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-1.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-2.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-3.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 space-x-2 my-3'>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-1.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-2.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-3.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 space-x-2 my-3'>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-1.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-2.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-3.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 space-x-2 my-3'>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-1.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-2.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                    <div className="rounded-[17px] border-[4px] border-white relative h-[185px] overflow-hidden shadow-[0_0_9px_0px_rgba(0,0,0,0.095)]">
                        <span className='z-10 absolute top-2 left-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white text-[16px] font-semibold'>$300</span>
                        <span className='z-10 absolute top-2 right-2 h-[26px] w-auto bg-[#222C40]/[0.38] rounded-[8px] px-[7px] text-white flex items-center justify-center'>
                            <Icon icon="ph:heart" width="20" height="20" />
                        </span>
                        <span className='z-10 absolute bottom-0 left-0 w-full p-2'>
                            <h2 className='text-[20px] leading-[20px] font-semibold text-white'>Galenstock</h2>
                            <span className='flex items-center justify-start'>
                                <Icon icon="ph:star-fill" width="18" height="18" className='text-white'/>
                                <span className='text-white text-[16px] ms-1'>4.9</span>
                            </span>
                        </span>
                        <Image className='relative' src='/slider/s-3.png' alt="hill" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
  </>
);

export default App;