import { Component, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss']
})
export class DetailVoitureComponent {

  @Input()
  voiture: Voiture = {
    id: 0,
    type: '',
    chaise: 0,
    longueure: 0,
    placelibre: 0,
    placereserver: 0,
    trajet: '',
    depart: '',
    arriver: ''
  }

  @Input()
  places: Array<Place> = [];

}
