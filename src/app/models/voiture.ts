import { Place } from "./place";

export interface Voiture {
    id: number,
    type: string,
    chaise: number,
    longueure: number,
    places: Array<Place>
}