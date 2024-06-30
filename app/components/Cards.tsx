
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from 'next/link';

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

const Header = () => 
(
  <section className='grid grid-cols-2 space-x-3 mt-5'>
    <div className='bg-white p-2 rounded-lg shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-5 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-[115px] h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-3.png' alt="hill" fill style={{ objectFit: 'cover' }}/>
                </div>
            </div>
            <div className='col-span-3'></div>
        </div>
    </div>
    <div className='bg-white p-2 rounded-lg shadow-[0_0_5px_0px_rgba(0,0,0,0.07)]'>
        <div className='grid grid-cols-5 space-x-3'>
            <div className='col-span-2'>
                <div className='relative w-[115px] h-[95px] rounded-[7px] overflow-hidden'>
                    <Image src='/slider/s-3.png' alt="hill" fill style={{ objectFit: 'cover' }}/>
                </div>
            </div>
            <div className='col-span-3'></div>
        </div>
    </div>
  </section>
);

export default Header;