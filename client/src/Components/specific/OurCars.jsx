import React from 'react'

const OurCars = () => {
  return (
    <div className='container mx-auto py-20'>
    <div>
        <p className='text-4xl text-center font-bold pb-20'>Cars are not just machines; <span className='text-blue-600'>they are extensions of our personality</span></p>
    </div>
      <div className=' mx-auto  flex flex-row gap-x-10'>
        <div className='space-y-4 border-2'>
            <div className="p-2 w-[400px] h-[200px]"  style={{ backgroundImage: 'url(/homepagebg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
            <div className='flex flex-col space-y-1 text-center'>
                <p>New Cars are here</p>
                <p>A car is not just a vehicle</p>
                <p>it's an experience, a journey, and a story in motion</p>
            </div>
        </div>
        <div className='space-y-4  border-2'>
            <div  style={{ backgroundImage: 'url(/car1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='w-[400px] h-[200px]'></div>
            <div className='flex flex-col space-y-1 text-center'>
                <p>New Cars are here</p>
                <p>A car is not just a vehicle</p>
                <p>it's an experience, a journey, and a story in motion</p>
            </div>
        </div>
        <div className='space-y-4  border-2'>
            <div  style={{ backgroundImage: 'url(/car2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='w-[400px] h-[200px]'></div>
            <div className='flex flex-col space-y-1 text-center'>
                <p>New Cars are here</p>
                <p>A car is not just a vehicle</p>
                <p>it's an experience, a journey, and a story in motion</p>
            </div>
        </div>
      </div>
      {/* // view more */}
      <div className='flex justify-center items-center mt-10'>
        <button className='bg-blue-600 px-4 py-2 text-xl rounded-2xl text-white font-bold'>View More</button>
      </div>
    </div>
  )
}

export default OurCars;
