import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES: any[] = [MatButtonModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  providers: [],
  exports: [...MATERIAL_MODULES],
})
export class SharedModule {}
