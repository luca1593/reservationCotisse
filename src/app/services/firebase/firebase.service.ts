import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, addDoc, collection, getFirestore } from '@angular/fire/firestore';
import { Place } from 'src/app/models/place';
import { environment } from 'src/environments/environment';


// Initialize Firebase
export const app = initializeApp(environment.firebase);
export const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: Firestore) { }

  savePalace(places: Array<Place>) {
    const collectionInstance = collection(db, "places");
    addDoc(collectionInstance, places).then(() => {
      alert("Place reserver");
    }).catch(error => {
      alert("Place occuper");
    })
  }

  getAllPlace() {

  }

}
