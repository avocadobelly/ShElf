/**
 * Typescript custom types
 * These are globally available in the project
 */

interface IGrocery {
    _id: string
    name: string
    bought: boolean
    timeCreated?: string
    timeUpdated?: string
}

interface GroceryProps {
    grocery: IGrocery
}

type APIDataType = {
    message: string
    status: string
    groceries: IGrocery[]
    grocery: IGrocery
}