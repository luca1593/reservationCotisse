import { Component, OnDestroy, OnInit } from '@angular/core';
import { laoderState } from './laoder..model';
import { Subscription } from 'rxjs';
import { LaoderService } from './service/laoder.service';

@Component({
  selector: 'app-laoder',
  templateUrl: './laoder.component.html',
  styleUrls: ['./laoder.component.scss']
})
export class LaoderComponent implements OnInit, OnDestroy {

  show = false;

  subscription: Subscription | undefined;

  constructor(
    private laoderService: LaoderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.laoderService.laoderState
      .subscribe((state: laoderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
