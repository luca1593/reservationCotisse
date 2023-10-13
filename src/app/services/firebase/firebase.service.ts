import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Place } from 'src/app/models/place';

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

  getAllPlace(): Observable<Array<Place>> {
    let places: Array<Place> = [];
    const collectionInstance = collection(this.fireStore, "places");
    collectionData(collectionInstance).subscribe(data => {
      return data;
    });
    return of();
  }

}
