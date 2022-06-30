import React from "react";

export const Grocery: React.FC<IGroceryProps> = ({grocery}) => {
    return (<li>{grocery.name}</li>);
  };