import { Place } from "src/app/models/place"

export interface Voiture {
    id: number,
    type: string,
    chaise: number,
    longueure: number,
    placelibre: number,
    placereserver: number,
    places: Array<Place>
    trajet: string,
    depart: string,
    arriver: string
}