import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(
    private fireStore: AngularFirestore
  ) { }

  getData(): any {
    return this.fireStore.collection('users').snapshotChanges();
  }

}
