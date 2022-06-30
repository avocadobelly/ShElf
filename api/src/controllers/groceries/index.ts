import { Response, Request } from "express";
import { IGrocery } from "../../types/grocery";
import Grocery from "../../models/grocery";

const getGroceries = async (req: Request, res: Response): Promise<void> => {
    try {
        const groceries: IGrocery[] = await Grocery.find();
        res.status(200).json({ groceries });
    } catch (e) {
        console.error("There was a problem retrieving the grocery list.");
        throw e;
    }
};

const addGrocery = async(req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IGrocery, "name" | "bought">

        const grocery: IGrocery = new Grocery({
            name: body.name,
            bought: body.bought,
        })

        // saves new grocery to the database
        const newGrocery: IGrocery = await grocery.save();

        // returns an array of all groceries in the database
        const allGroceries: IGrocery[] = await Grocery.find();

        res.status(200).json({ message: "Grocery added to the list!\n", grocery: newGrocery, groceries: allGroceries });

    } catch (e) {
        console.error("Something went wrong adding the grocery to the list!");
        throw e;
    }
};

// Update Grocery

// Delete Grocery

export { getGroceries, addGrocery };