import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { OnDestroySubject } from '@app/shared/utils/on-destroy-subject';

import { isLoadingSelector } from '@app/store/boxes/boxes.selectors';
import { IAppStateModel } from '@app/store/app-state.model';
import { boxesSelector } from '@app/store/boxes/boxes.selectors';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OnDestroySubject],
})
export class BoxesComponent {
  isLoading$ = this._store.pipe(select(isLoadingSelector));
  boxes$ = this._store.pipe(select(boxesSelector));

  public constructor(private _store: Store<IAppStateModel>) {}
}
