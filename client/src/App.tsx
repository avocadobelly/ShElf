import { any } from 'prop-types';
import React, { useEffect, useState } from 'react';
import API from "./API";
import { Grocery } from './components/Grocery';
import GroceryList from "./components/GroceryList"

function App() {

    const exampleGroceries: IGrocery[] = [
        {
           _id: '123',
           name: 'Banana',
           bought: false, 
        },
        {
            _id: '456',
            name: 'Apple',
            bought: true, 
        },
        {
            _id: '789',
            name: 'Bread',
            bought: false, 
        },
      ];

    const [groceries, setGroceries] = useState(exampleGroceries);

  return (
    <div className="App grid grid-cols-5 grid-rows-6 w-screen'">
        <main className='col-span-full row-span-full mt-12 lg:mt-32 mx-auto'>
            <div className='col-start-2 col-span-3 gap-4 grid-rows-1 row-span-3 py-20'>
                <h1 className='text-center text-lg font-bold text-green-500'>ShElf</h1>
                <h2 className='text-center text-base font-semibold text-green-800'>Grocery List</h2>
            </div>
            <div className='groceries flex justify-center col-start-2 col-span-3 gap-4 grid-rows-3 row-span-4'>
                <ul className=''>
                    <Grocery grocery={exampleGroceries[0]}/>
                    <Grocery grocery={exampleGroceries[1]}/>
                    <Grocery grocery={exampleGroceries[2]}/>
                </ul>
            </div>
        </main>
    </div>        
  );
}

export default App;
