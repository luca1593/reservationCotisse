import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Voyage } from 'src/app/models/Voyage';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-validation-reservation-modal',
  templateUrl: './validation-reservation-modal.component.html',
  styleUrls: ['./validation-reservation-modal.component.scss']
})
export class ValidationReservationModalComponent {

  @Input()
  place: Place = {
    libre: false,
    numero: 0,
    client:{
      adresse:"",
      email:"",
      nom:"",
      nombrePlace:0,
      numeroTel:""
    }
  }
  @Input()
  idModal: string = "";

  @Input()
  voyage: Voyage = {
    arrive: "",
    depart: "",
    date: Date.now(),
    prix: 0,
    voitures: []
  };

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
        client: {
          adresse: "",
          email: "",
          nom: "",
          nombrePlace: 0,
          numeroTel: ""
        }
      }
    ]
  };

  client: Client = {
    adresse:"",
    email:"",
    nom:"",
    nombrePlace:0,
    numeroTel:""
  }

  constructor(private firebaseService: FirebaseService) { }

  validerReservation() {
    let voitures: Array<Voiture> = this.voyage.voitures;
    let indexVoiture = this.voyage.voitures.lastIndexOf(this.voiture);
    voitures.at(indexVoiture)?.places.forEach(p => {
      if (p.numero === this.place.numero) {
        p.libre = this.place.libre;
        p.client = this.client
      }
    });

    if (this.voyage.id) {
      this.firebaseService.updateVoyage(this.voyage, this.voyage.id);
    }
  }

}
