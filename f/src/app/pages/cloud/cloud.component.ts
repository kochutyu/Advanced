import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CloudService } from 'src/app/shared/services/cloud.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {
  users: Array<any> = [];
  constructor(
    private services: CloudService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    return this.services.getData().subscribe(actiontArr => {
      this.users = actiontArr.map(user => {
        return {
          id: user.payload.doc.id,
          ...user.payload.doc.data()
        }
      })
    })
  }



}
