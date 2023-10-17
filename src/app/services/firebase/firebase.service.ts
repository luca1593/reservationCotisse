import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { Voyage } from 'src/app/models/Voyage';
import { Place } from 'src/app/models/place';
import { Voiture } from 'src/app/models/voiture';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: Firestore) { }

  savePalace(places: Array<Place>) {
    const collectionInstance = collection(this.fireStore, "places");
    places.forEach(p => {
      addDoc(collectionInstance, p).then(() => {
        console.log("Place reserver");
      }).catch(error => {
        console.log("Place occuper");
      })
    });
  }

  saveVoyage(voyage: Voyage) {
    const collectionInstance = collection(this.fireStore, "voyage");
    addDoc(collectionInstance, voyage).then(() => {
      console.log("Voyage enregistrer");
    }).catch(error => {
      console.log("Erreur sur l'enregistrement du voyage");
    });
  }

  async getAllVoyages() {
    let voyages: Array<Voyage> = [];
    const collectionInstance = collection(this.fireStore, "voyage");
    let allData = await getDocs(collectionInstance);
    return allData;
  }

  updateVoyage(voyage: Voyage, place: Place, voiture: Voiture, id: string,) {
    const collectionInstance = doc(this.fireStore, "voyage", id);
    let voitures: Array<Voiture> = voyage.voitures;
    let indexVoiture = voyage.voitures.lastIndexOf(voiture);
    voitures.at(indexVoiture)?.places.forEach(p => {
      if (p.numero === place.numero) {
        p.libre = place.libre;
        p.client = place.client
      }
    });

    const updatedata = {
      voitures: voitures
    }
    updateDoc(collectionInstance, updatedata).then(() => {
      console.log("Place reserver");
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  }

  async getAllPlace() {
    let places: Array<Place> = [];
    const collectionInstance = collection(this.fireStore, "places");
    let allData = await getDocs(collectionInstance);
    return allData;
  }

  updatePlace(place: Place, id: string) {
    const collectionInstance = doc(this.fireStore, "places", id);
    const updatedata = {
      libre: !place.libre
    }
    updateDoc(collectionInstance, updatedata).then(() => {
      console.log("Place reserver");
      window.location.reload();
    }).catch(() => {
      console.log("Place occuper");
    });
  }

}
