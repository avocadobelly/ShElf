import {Document} from "mongoose";

export interface IShoppingItem extends Document {
    name: string, // eg: 'Bananas'
    bought: boolean
}