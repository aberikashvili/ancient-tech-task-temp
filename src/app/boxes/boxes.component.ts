import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-boxes',
  template: `Boxes grid`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent implements OnInit {
  public boxes: any[] = [];

  // public constructor(private _apiService: ApiService) {}

  public ngOnInit(): void {
    // this._apiService.loadBoxes()
    //   .subscribe(({ data, loading }) => {
    //     this.boxes = data.boxes;

    //     console.log('BOXES', this.boxes);
    //     console.log('LOADING', loading);
    //   });
  }
}
