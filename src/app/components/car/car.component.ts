import { Component } from '@angular/core';
import { Voiture } from './voiture';

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
      siege: 32,
      type: 'sprinter'
    },
    {
      id: 2,
      longueure: 360,
      siege: 32,
      type: 'crafter'
    },
    {
      id: 3,
      longueure: 260,
      siege: 27,
      type: 'Mersedess'
    }
  ]

}
