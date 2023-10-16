import { Client } from "./Client";

export interface Place {
    numero: number,
    libre: boolean,
    client: Client
}