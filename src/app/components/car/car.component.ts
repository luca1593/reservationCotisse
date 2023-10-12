import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public places: Array<Place> = [];
  public voitures: Array<Voiture> = [
    {
      id: 1,
      longueure: 360,
      chaise: 22,
      type: 'sprinter',
      placelibre: 20,
      placereserver: 12,
      trajet: "Antananarivo - Fianarantsoa",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    },
    {
      id: 2,
      longueure: 360,
      chaise: 22,
      type: 'crafter',
      placelibre: 25,
      placereserver: 7,
      trajet: "Antananarivo - Antsirabe",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    },
    {
      id: 3,
      longueure: 260,
      chaise: 25,
      type: 'Mersedess',
      placelibre: 5,
      placereserver: 22,
      trajet: "Antananarivo - Morondava",
      depart: "30 oct 2023 18h:30",
      arriver: "02 oct 2023 18h:30"
    }
  ];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.initPlace();
    this.reserverPlace();
  }

  initPlace(): void {
    this.voitures.forEach(v => {
      for (let i = 1; i <= v.chaise; i++) {
        let place: Place = {
          idVoiture: v.id,
          libre: Math.floor(Math.random() * 100) % 2 === 1,
          numero: i
        };
        this.places.push(place);
      }
    });
  }

  reserverPlace(): void {
    this.firebaseService.savePalace(this.places);
  }

}
