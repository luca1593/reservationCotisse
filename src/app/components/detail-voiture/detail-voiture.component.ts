import { Component, Input } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss']
})
export class DetailVoitureComponent {

  constructor(private firebaseService: FirebaseService){}

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
  };
  @Input()
  mapPlaces: Map<number, Array<Place>> = new Map();
  @Input()
  mapIdPlace: Map<number, Array<string>> = new Map();

  reserverPlace(place: Place){
    let idPlace: string = "";
    this.firebaseService.updatePlace(place, idPlace);
  }

  getIdPlace(index: number, list: Array<string>){
    console.log(list.at(index));
    return list.at(index);
  }

}
