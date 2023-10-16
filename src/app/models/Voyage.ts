import { Voiture } from "./voiture";

export interface Voyage {
    id?: string,
    depart: string,
    arrive: string,
    date: number,
    prix: number,
    voitures: Array<Voiture>
}