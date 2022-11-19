import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { OnDestroySubject } from '@app/shared/utils/on-destroy-subject';

import * as BoxesActions from '@app/store/boxes/boxes.actions';
import { isLoadingSelector } from '@app/store/boxes/boxes.selectors';
import { IAppStateModel } from '@app/store/app-state.model';
import { boxesSelector } from '@app/store/boxes/boxes.selectors';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroySubject],
})
export class BoxesComponent implements OnInit {
  isLoading$ = this._store.pipe(select(isLoadingSelector));
  boxes$ = this._store.pipe(select(boxesSelector));

  public constructor(private _store: Store<IAppStateModel>) {}

  public ngOnInit(): void {
    this._store.dispatch(BoxesActions.getBoxes());

    // this._store
    //   .select('boxes')
    //   .pipe(takeUntil(this._onDestroy$$))
    //   .subscribe((boxes: BoxModel[]) => {
    //     console.log('boxes', boxes);
    //     debugger;
    //   });

    // this._apiService.loadBoxes().subscribe(({ data, loading }) => {
    //   this.boxes = data.boxes;

    //   console.log('BOXES', this.boxes);
    //   console.log('LOADING', loading);
    // });
  }
}
