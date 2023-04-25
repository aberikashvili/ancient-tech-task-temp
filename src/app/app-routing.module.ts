import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailsComponent } from './pages/box-details/box-details.component';
import { BoxesComponent } from './pages/boxes/boxes.component';

const routes: Routes = [
  {
    path: 'boxes',
    component: BoxesComponent,
  },
  {
    path: 'boxes/:id',
    component: BoxDetailsComponent,
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
