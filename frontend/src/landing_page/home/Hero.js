import React from 'react';
function Hero() {
    return ( 
        <div id='container' className='w-full'>
            <div id='row' className='flex flex-col item-center text-center'>
                <img src="../home/chart.png" alt="Home image" className='mb-5' />
                <h1 className='mt-5 text-3xl font-bold mb-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='bg-blue-600 w-[30%] text-white font-bold px-4 py-2 self-center mt-10'>Sign up for Free</button>
            </div>
        </div>
     );
}

export default Hero;