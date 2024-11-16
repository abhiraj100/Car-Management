import React from 'react'
import Footer from '../Components/layout/Footer';
import CarPreview from '../Components/specific/CarPreview';
import OurCars from '../Components/specific/OurCars';

const Home = () => {
  return (
    <>
    <div style={{ backgroundImage: 'url(/homepagebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='w-auto h-[600px]' >
        <div className='container mx-auto relative ' >
        <h2 className='text-4xl font-bold text-black absolute right-[20px] top-[40px]' >Manage Your Cars, Simplified!</h2>
        <p className='text-xl font-bold text-white absolute right-[20px] top-[80px]'>Effortlessly organize and showcase your car collection with our intuitive platform.</p>
        <p className='text-xl font-bold text-black absolute right-[20px] top-[100px]'>Drive Smart, Manage Easy!</p>
        </div>
    </div>

    <CarPreview />
    <OurCars />
    <Footer />
    </>
  )
}

export default Home;
