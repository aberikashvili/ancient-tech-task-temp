import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES: any[] = [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  providers: [],
  exports: [...MATERIAL_MODULES],
})
export class SharedModule {}
