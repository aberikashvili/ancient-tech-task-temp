import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, ...MATERIAL_MODULES],
  providers: [],
  exports: [LoadingSpinnerComponent, ...MATERIAL_MODULES],
})
export class SharedModule {}
