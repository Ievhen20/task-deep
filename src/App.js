import React from 'react';

function App() {
  return (
    <div className='flex p-5 flex-row w-full justify-center items-center text-[50px] md:bg-lightgray-500'>
      <h1 className='tracking-wide text-gray-600 text-3xl font-bold'>Custom Utility Colors Using Tailwind `extend`</h1>
      <div className='flex flex-wrap gap-4 mx-auto w-full flex justify-center p-12 rounded-md'>
        <div className='flex items-center justify-center text-gray-800 bg-lemon-yellow w-40 h-40 rounded-md shadow-xl'>Lemon Yellow</div>
        <div className='flex items-center justify-center text-gray-100 bg-rose-pink w-40 h-40 rounded-md shadow-xl'>Rose Pink</div>
        <div className='flex items-center justify-center text-gray-100 bg-blood-red w-40 h-40 rounded-md shadow-xl'>Blood Red</div>
        <div className='flex items-center justify-center text-gray-700 bg-parrot-feather w-40 h-40 rounded-md shadow-xl'>Parrot Feather</div>
        <div className='flex items-center justify-center text-gray-100 bg-purple-extended w-40 h-40 rounded-md shadow-xl'>Purple Extended</div>
      </div>
    </div>
  );
}

export default App;
