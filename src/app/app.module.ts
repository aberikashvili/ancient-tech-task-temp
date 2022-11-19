import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesComponent } from './pages/boxes/boxes.component';
import { GraphQLModule } from './graphql/graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgrxStoreModule } from './store/ngrx-store.module';
import { BoxDetailsComponent } from './pages/box-details/box-details.component';
import { BoxItemComponent } from './pages/box-item/box-item.component';

@NgModule({
  declarations: [AppComponent, BoxesComponent, BoxItemComponent, BoxDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SharedModule,
    NgrxStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
