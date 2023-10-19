import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Voyage } from 'src/app/models/Voyage';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  mapPlaces: Map<number, Place[]> = new Map();
  client: Client = {
    adresse: "",
    email: "",
    nom: "",
    nombrePlace: 0,
    numeroTel: ""
  };
  places: Array<Place> = [];
  voitures: Array<Voiture> = [
    {
      id: 1,
      longueure: 360,
      chaise: 22,
      type: 'Sprinter',
      places: []
    },
    {
      id: 2,
      longueure: 360,
      chaise: 22,
      type: 'Crafter',
      places: []
    },
    {
      id: 3,
      longueure: 260,
      chaise: 25,
      type: 'Mersedess',
      places: []
    }
  ];

  voyages: Array<Voyage> = [];
  depart: string = "";
  arrive: string = "";
  date: number = Date.now();

  constructor(private firebaseService: FirebaseService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    //this.initVoyage();
    this.getAllVoyage();
  }

  initPlace(): void {
    this.voitures.forEach(v => {
      for (let i = 1; i <= v.chaise; i++) {
        let place: Place = {
          libre: true,
          numero: i,
          client: this.client
        };
        v.places.push(place);
      }
    });
  }

  initVoyage() {
    this.initPlace();
    let voyage: Voyage = {
      depart: "Antananarivo",
      arrive: "Morondava",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach(v => {
      voyage.voitures.push(v);
    });
    let v1: Voyage = {
      depart: "Antananarivo",
      arrive: "Fianarantsoa",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach(v => {
      v1.voitures.push(v);
    });
    let v2: Voyage = {
      depart: "Antananarivo",
      arrive: "Antsirabe",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach(v => {
      v2.voitures.push(v);
    });
    this.firebaseService.saveVoyage(voyage);
    this.firebaseService.saveVoyage(v1);
    this.firebaseService.saveVoyage(v2);
  }

  async getAllVoyage() {
    this.voyages = [];
    this.firebaseService.getAllVoyages().then(data => {
      data.docs.forEach(d => {
        let voyage: Voyage = {
          id: d.id,
          arrive: d.get("arrive"),
          depart: d.get("depart"),
          date: d.get("date"),
          prix: d.get("prix"),
          voitures: []
        };
        let vtrs: Array<Voiture> = d.get("voitures");
        vtrs.forEach(v => {
          v.places.sort((p1, p2) => (p2.numero - p1.numero));
          voyage.voitures.push(v);
        });
        this.voyages.push(voyage);
      });
    }).catch((error) => {
      console.log("Erreur de chargements");
    });
  }

  filterVoyage() {
    if (this.depart && this.arrive && this.date) {
      this.voyages = this.voyages.filter(v => {
        
        return v.depart === this.depart && v.arrive === this.arrive &&  this.compareDate(v.date, this.date);
      });
    }
  }

  compareDate(d1: number, d2: number): boolean {
    return this.datePipe.transform(d1, "dd/MM/yyyy") == this.datePipe.transform(d2, "dd/MM/yyyy");
  }

}
