import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Place } from 'src/app/models/place';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: Firestore) { }

  savePalace(places: Array<Place>) {

  }

  getAllPlace() {

  }

}
