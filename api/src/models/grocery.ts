import {IGrocery} from "../types/grocery";
import {model, Schema} from "mongoose";

const grocerySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        bought: {
            type: Boolean,
            required: false, // leaving as false for now, will update with later stories
        },
    },
    { timestamps: true }
)

export default model<IGrocery>("Grocery", grocerySchema);

