import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { BoxesComponent } from './boxes/boxes.component';

const routes: Routes = [
  {
    path: 'boxes',
    component: BoxesComponent,
  },
  {
    path: 'boxes/:id',
    component: BoxComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boxes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
