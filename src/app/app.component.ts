import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntil, filter } from 'rxjs';

import * as BoxesActions from '@app/store/boxes/boxes.actions';
import * as UserActions from '@app/store/user/user.actions';
import { IAppStateModel } from '@app/store/app-state.model';
import { currentUserSelector, isLoadingSelector } from './store/user/user.selectors';
import { UserModel } from './models/user.model';
import { OnDestroySubject } from './shared/utils/on-destroy-subject';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OnDestroySubject],
})
export class AppComponent implements OnInit {
  isLoading$ = this._store.pipe(select(isLoadingSelector));
  currentUser!: UserModel;

  get balance(): number {
    return this.currentUser.wallets[0].amount;
  }

  constructor(
    private _store: Store<IAppStateModel>,
    private _onDestroy$$: OnDestroySubject,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(BoxesActions.getBoxes());
    this._store.dispatch(UserActions.getCurrentUser());

    this._store
      .select(currentUserSelector)
      .pipe(
        takeUntil(this._onDestroy$$),
        filter((user) => !!user)
      )
      .subscribe((user: UserModel) => (this.currentUser = user));

    this._apiService
      .walletUpdateSubscription()
      .pipe(takeUntil(this._onDestroy$$))
      .subscribe((result) => {
        console.log(result);
      });
  }
}
