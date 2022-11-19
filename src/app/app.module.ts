import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesComponent } from './boxes/boxes.component';
import { GraphQLModule } from './graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgrxStoreModule } from './store/ngrx-store.module';

@NgModule({
  declarations: [AppComponent, BoxesComponent],
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
