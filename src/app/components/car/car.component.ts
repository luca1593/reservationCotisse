import { Component } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  public voitures: Array<Voiture> = [
    {
      id: 1,
      longueure: 360,
      chaise: 32,
      type: 'sprinter',
      placelibre: 20,
      placereserver: 12,
      places: [
      ],
      trajet: "Antananarivo - Fianarantsoa",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    },
    {
      id: 2,
      longueure: 360,
      chaise: 32,
      type: 'crafter',
      placelibre: 25,
      placereserver: 7,
      places: [

      ],
      trajet: "Antananarivo - Antsirabe",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    },
    {
      id: 3,
      longueure: 260,
      chaise: 27,
      type: 'Mersedess',
      placelibre: 5,
      placereserver: 22,
      places: [

      ],
      trajet: "Antananarivo - Morondava",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    }
  ]

}
