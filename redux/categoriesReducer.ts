import { GET_CATEGORIES } from "./actionsTypes";

export interface ICategory {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export type ICategories = ICategory[];

interface IAction {
    type: string;
    payload: ICategories;
}

export const initialState: ICategories = [];

const categoriesReducer = (state: ICategories = initialState, action: IAction) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return action.payload;
        default:
            return state
    }
}

export default categoriesReducer;