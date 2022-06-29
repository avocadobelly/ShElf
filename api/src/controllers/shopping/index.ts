import { Response, Request } from "express";
import { IShoppingItem } from "../../types/shoppingItem";
import ShoppingItem from "../../models/shoppingItem";

const getShopping = async (req: Request, res: Response): Promise<void> => {
    try {
        const shopping: IShoppingItem[] = await ShoppingItem.find();
        res.status(200).json({shopping});
    } catch (e) {
        console.error("There was a problem retrieving the shopping list.");
        throw e;
    }
}