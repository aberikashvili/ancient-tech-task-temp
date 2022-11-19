import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as BoxesActions from '@app/store/boxes/boxes.actions';
import { IAppStateModel } from '@app/store/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store<IAppStateModel>) {}

  ngOnInit(): void {
    this._store.dispatch(BoxesActions.getBoxes());
  }
}
