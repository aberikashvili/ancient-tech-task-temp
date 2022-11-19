import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../api.service';

import * as BoxesActions from '../store/boxes/boxes.actions';

@Component({
  selector: 'app-boxes',
  template: `Boxes grid`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent implements OnInit {
  public boxes: any[] = [];

  public constructor(private _apiService: ApiService, private _store: Store) {}

  public ngOnInit(): void {
    this._apiService.loadBoxes().subscribe(({ data, loading }) => {
      this.boxes = data.boxes;

      console.log('BOXES', this.boxes);
      console.log('LOADING', loading);
    });

    this._store.dispatch(BoxesActions.getBoxes());
  }
}
