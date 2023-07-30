import { GET_SPOTS, GET_CATEGORIES } from "./actionsTypes";
import { ISpots } from "./spotsReducer";
import { ICategories } from "./categoriesReducer";

export const getSpots = (payload: ISpots) => ({
    type: GET_SPOTS,
    payload: payload,
});

export const getCategories = (payload: ICategories) => ({
    type: GET_CATEGORIES,
    payload: payload,
});