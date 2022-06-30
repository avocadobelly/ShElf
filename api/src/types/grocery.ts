import {Document} from "mongoose";

export interface IGrocery extends Document {
    name: string
    bought: boolean
};