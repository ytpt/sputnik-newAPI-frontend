import { GET_SPOTS } from "./actionsTypes";

export interface ISpot {
    id: number;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    country: string;
    average_score: string;
    spot_category_id: number;
}

export type ISpots = ISpot[];

interface IAction {
    type: string;
    payload: ISpots;
}

export const initialState: ISpots = [];

const spotsReducer = (state: ISpots = initialState, action: IAction) => {
    switch(action.type) {
        case GET_SPOTS:
            return action.payload;
        default:
            return state
    }
}

export default spotsReducer;