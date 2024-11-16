import React from 'react'
import { FaPhone } from "react-icons/fa";
import { RiFriendicaLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const CarPreview = () => {
  return (
    <div className='bg-sky-300'>
      <div className='container mx-auto flex flex-col space-y-4 py-10'>
        <div className='flex flex-col space-y-2'>
            <p className='text-4xl font-bold text-center text-blue-600'>Why Choose Us</p>
            <p className='text-xl font-normal text-center text-black'>Effortlessly manage your car collection with our intuitive platform. Create, view, edit, and search through your cars with ease. From enthusiasts to dealers, we offer complete control over your car listings, all in one place. Simplify car management and boost productivity with a user-friendly experience.</p>
        </div>
        <div className='flex row gap-x-10'>
            <div style={{ backgroundImage: 'url(/car2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='w-[900px] h-[400px]'>
            </div>
            <div className='flex flex-col gap-y-10'>
                <div className='flex flex-row space-x-4'>
                    <div className='w-[50px] h-[50px] bg-blue-900 flex items-center justify-center'>
                    <FaPhone className='text-white' />
                    </div>
                    <div>
                        <p className='font-bold'>Customer Support</p>
                        <p>Available 24 X 7</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div className='w-[50px] h-[50px] bg-blue-900 flex items-center justify-center'>
                    <RiFriendicaLine className='text-white' />
                    </div>
                    <div>
                        <p className='font-bold'>User-Friendly Interface</p>
                        <p>Intuitive design for easy car management</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div className='w-[50px] h-[50px] bg-blue-900 flex items-center justify-center'>
                    <FaSearch className='text-white' />
                    </div>
                    <div>
                        <p className='font-bold'>Smart Search Functionality</p>
                        <p>Available 24 X 7</p>
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div className='w-[50px] h-[50px] bg-blue-900 flex items-center justify-center'>
                    <MdHealthAndSafety className='text-white' />
                    </div>
                    <div>
                        <p className='font-bold'>Safety</p>
                        <p>Safety features are add-on</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarPreview;
