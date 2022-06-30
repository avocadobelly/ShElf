import React from "react";

interface IGrocery {
    name: string;
    bought: boolean;
}

interface Props {
    grocery: IGrocery;
}

export const Grocery: React.FC<Props> = ({grocery}) => {
    return (<li>{grocery.name}</li>);
  };