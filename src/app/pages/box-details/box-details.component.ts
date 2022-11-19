import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, takeUntil } from 'rxjs';
import { OnDestroySubject } from '@app/shared/utils/on-destroy-subject';
import { Store, select } from '@ngrx/store';
import { IAppStateModel } from '@app/store/app-state.model';
import { boxByIdSelector } from '@app/store/boxes/boxes.selectors';
import { BoxModel } from '@app/models/box.model';
import { isLoadingSelector } from '@app/store/boxes/boxes.selectors';
import * as BoxActions from '@app/store/box/box.actions';
import { isOpeningSelector } from '@app/store/box/box.selectors';
import { boxOpeningsSelector } from '@app/store/box/box.selectors';
import { BoxOpeningModel } from '@app/models/box-opening.model';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroySubject],
})
export class BoxDetailsComponent implements OnInit {
  box!: BoxModel;
  isLoading$ = this._store.pipe(select(isLoadingSelector));
  isOpening$ = this._store.pipe(select(isOpeningSelector));
  boxeOpenings$ = this._store.pipe(select(boxOpeningsSelector));

  boxOpenings: BoxOpeningModel[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _onDestroy$$: OnDestroySubject,
    private _store: Store<IAppStateModel>
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(takeUntil(this._onDestroy$$)).subscribe((params: Params) => {
      this._store
        .select(boxByIdSelector(params['id']))
        .pipe(
          takeUntil(this._onDestroy$$),
          filter((box) => !!box)
        )
        .subscribe((box) => {
          this.box = box as BoxModel;
        });
    });

    this.boxeOpenings$
      .pipe(takeUntil(this._onDestroy$$))
      .subscribe((openings: BoxOpeningModel[]) => {
        this.boxOpenings = openings;
      });
  }

  openBox(): void {
    this._store.dispatch(
      BoxActions.openBox({ input: { boxId: this.box.id, amount: 1, multiplierBoxBet: 0 } })
    );
  }
}
