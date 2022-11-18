import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public constructor(private _apollo: Apollo) {}

  public loadBoxes(): Observable<any> {
    return this._apollo.query<any>({
      query: gql`
        query {
          boxes(free: false, purchasable: true, openable: true) {
            edges {
              node {
                id
                name
                iconUrl
                cost
              }
            }
          }
        }
      `,
    });
  }
}
