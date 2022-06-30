import {Document} from "mongoose";

export interface IShoppingItem extends Document {
    name: string
    bought: boolean
};