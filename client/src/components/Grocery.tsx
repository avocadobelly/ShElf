import React from "react";

export const Grocery: React.FC<IGroceryProps> = ({grocery}) => {
    return (<li className='text-left list-none m-3 py-3'>{grocery.name}</li>);
  };