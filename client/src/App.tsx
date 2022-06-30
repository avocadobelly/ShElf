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
    // const [grocery, setGrocery] = useState("");


    // useEffect(() => {
    //     const fetchGroceryAndSetGroceries = async () => {
    //         const groceries = await API.getAllGroceries();
    //         setGroceries(groceries);
    //     }
    //     fetchGroceryAndSetGroceries();
    // }, [])

  return (
    <div className="App">
        <main>
            <h1 className='text-8xl font-bold text-green-500'>ShElf</h1>
            <h2 className='text-6xl font-semibold text-green-800'>Grocery List</h2>
            <ul>
                <Grocery grocery={exampleGroceries[0]}/>
                <Grocery grocery={exampleGroceries[1]}/>
                <Grocery grocery={exampleGroceries[2]}/>
            </ul>
        </main>
    </div>        
  );
}

export default App;
