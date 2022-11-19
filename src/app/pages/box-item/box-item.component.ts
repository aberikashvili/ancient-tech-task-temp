import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BoxModel } from '@app/models/box.model';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxItemComponent {
  @Input()
  box!: BoxModel;

  constructor(private _router: Router) {}

  viewDetails(): void {
    this._router.navigate([`/boxes/${this.box.id}`]);
  }
}
