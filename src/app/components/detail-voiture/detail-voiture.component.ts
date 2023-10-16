import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Voyage } from 'src/app/models/Voyage';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss']
})
export class DetailVoitureComponent implements AfterViewInit {

  @Input()
  voiture: Voiture = {
    id: 0,
    type: '',
    chaise: 0,
    longueure: 0,
    places: [
      {
        libre: true,
        numero: 1,
        client : {
          adresse: "",
          email: "",
          nom: "",
          nombrePlace: 0,
          numeroTel: ""
        }
      }
    ]
  };
  @Input()
  mapPlaces: Map<number, Place[]> = new Map();

  @Input()
  voyage: Voyage = {
    arrive: "",
    depart: "",
    date: Date.now(),
    prix: 0,
    voitures: []
  };

  constructor(private firebaseService: FirebaseService) { }

  ngAfterViewInit(): void {
    this.getTotalPlaceLibre();
  }

  reserverPlace(place: Place) {
    if (place.libre) {
      //this.firebaseService.updatePlace(place, place.id);
    } else {
      alert("Cette place est deja occuper, veuillez choisir une place s'il vous plait");
    }
  }

  getTotalPlaceLibre(): number {
    let placeLibre: number = 0;
    this.mapPlaces.get(this.voiture.id)?.forEach(p => {
      if (p.libre) {
        placeLibre += 1;
      }
    });
    return placeLibre;
  }

  getPlaceReserver(): number {
    let placeReserver: number = 0;
    this.mapPlaces.get(this.voiture.id)?.forEach(p => {
      if (!p.libre) {
        placeReserver += 1;
      }
    });
    return placeReserver;
  }

}
