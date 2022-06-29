import mongoose from "mongoose";
import {IShoppingItem} from "./../types/shoppingItem";
import {model, Schema} from "mongoose"

const shoppingItemSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        bought: {
            type: Boolean,
            required: false, // leaving as false for now, will update with later stories
        }
    },
)

export default model<IShoppingItem>("ShoppingItem", shoppingItemSchema);

