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
    adresse:"",
    email:"",
    nom:"",
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
      places:[]
    },
    {
      id: 2,
      longueure: 360,
      chaise: 22,
      type: 'Crafter',
      places:[]
    },
    {
      id: 3,
      longueure: 260,
      chaise: 25,
      type: 'Mersedess',
      places:[]
    }
  ];

  voyages: Array<Voyage> = [];
  depart: string = "";
  arrive: string = "";
  date: number = Date.now();

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.initPlace();
    //this.reserverPlace();
    //this.initVoyage();
    this.getAllVoyage();
    this.getAllPlace();
  }

  initPlace(): void {
    this.voitures.forEach(v => {
      for (let i = 1; i <= v.chaise; i++) {
        let place: Place = {
          libre: Math.floor(Math.random() * 100) % 2 === 1,
          numero: i,
          client: this.client
        };
        v.places.push(place);
      }
    });
  }

  reserverPlace(): void {
    this.firebaseService.savePalace(this.places);
  }

  initVoyage(){
    let voyage: Voyage = {
      depart: "Antananarivo",
      arrive: "Morondava",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach( v => {
      voyage.voitures.push(v);
    });
    let v1: Voyage = {
      depart: "Antananarivo",
      arrive: "Fianarantsoa",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach( v => {
      v1.voitures.push(v);
    });
    let v2: Voyage = {
      depart: "Antananarivo",
      arrive: "Antsirabe",
      date: Date.now(),
      prix: 25000,
      voitures: []
    }
    this.voitures.forEach( v => {
      v2.voitures.push(v);
    });
    this.firebaseService.saveVoyage(voyage);
    this.firebaseService.saveVoyage(v1);
    this.firebaseService.saveVoyage(v2);
  }

  async getAllVoyage() {
    this.voyages = [];
    this.firebaseService.getAllVoyages().then(data => {
      data.docs.forEach( d => {
        let voyage: Voyage = {
          id: d.id,
          arrive: d.get("arrive"),
          depart: d.get("depart"),
          date: d.get("date"),
          prix: d.get("prix"),
          voitures: d.get("voitures")
        }
        this.voyages.push(voyage);
      });
    }).catch( (error) =>{
      console.log("Erreur de chargements");
    });
  }

  filterVoyage() {
    this.getAllVoyage();
    if (this.depart && this.arrive && this.date) {
      this.voyages = this.voyages.filter(item => item.date === this.date && item.arrive === this.arrive && item.depart === this.depart);
    }
    console.log(this.voyages);
  }

  async getAllPlace() {

    this.firebaseService.getAllPlace().then(data => {
      data.docs.sort((a, b) => (a.get("idVoiture") - b.get("idVoiture"))).sort((a, b) => (b.get("numero") - a.get("numero"))).forEach(d => {
        this.voitures.forEach(v => {
          let place: Place = {
            libre: d.get("libre"),
            numero: d.get("numero"),
            client: this.client
          }
          if (d.get("idVoiture") === v.id) {
            if (this.mapPlaces.get(v.id)) {
              this.mapPlaces.get(v.id)?.push(place);
            } else {
              let pls: Array<Place> = [];
              pls.push(place)
              this.mapPlaces.set(v.id, pls);
            }
          }
        })
      });
    }).catch((error) => {
      console.log("Erreur de chargements");
    });
  }

}
