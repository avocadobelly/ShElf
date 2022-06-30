import axios, { AxiosResponse } from "axios";
import { ProviderProps } from "react";

const baseUrl: string = "https://localhost:4000";

export const getGroceries = async () : Promise<AxiosResponse<APIDataType>> => {
    try {
        const groceries: AxiosResponse<APIDataType> = await axios.get(
            baseUrl + "/"
        )
        return groceries;
    } catch (e) {
        throw e;
    }
};

export const addGrocery = async (formData: IGrocery):Promise<AxiosResponse<APIDataType>> => {
    try {
        const grocery : Omit<IGrocery, "_id"> = {
            name: formData.name,
            bought: formData.bought,
        }
        const saveGrocery: AxiosResponse<APIDataType> = await axios.post(
            baseUrl + "add-grocery",
            grocery
        )
        return saveGrocery;
    } catch (e) {
        throw e;
    }

}