import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dateDuJour: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.observableTimer();
  }

  observableTimer() {
    const source = timer(this.dateDuJour, 1000)
      .subscribe(v => {
        this.dateDuJour = new Date();
      })
  }

}
