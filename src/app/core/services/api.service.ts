import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, Observable } from 'rxjs';
import { BoxModel } from '@app/models/box.model';
import { OpenBoxInputModel } from '@app/models/open-box-input.model';
import { BoxOpeningModel } from '@app/models/box-opening.model';
import { UserModel } from '@app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _apollo: Apollo) {}

  loadBoxes(): Observable<BoxModel[]> {
    return this._apollo
      .query<any>({
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
      })
      .pipe(
        map((data) => {
          const edges = data.data.boxes.edges;

          return edges.map((edge: any) => ({
            id: edge?.node?.id,
            name: edge?.node?.name,
            iconUrl: edge?.node?.iconUrl,
            cost: edge?.node?.cost,
          })) as BoxModel[];
        })
      );
  }

  openBox(input: OpenBoxInputModel): Observable<BoxOpeningModel[]> {
    const OPEN_BOX = gql`
      mutation OpenBox($input: OpenBoxInput!) {
        openBox(input: $input) {
          boxOpenings {
            id
            itemVariant {
              id
              name
              value
            }
          }
        }
      }
    `;

    return this._apollo
      .mutate({
        mutation: OPEN_BOX,
        variables: {
          input,
        },
      })
      .pipe(map((response: any) => response.data.openBox.boxOpenings as BoxOpeningModel[]));
  }

  getCurrentUser(): Observable<UserModel> {
    return this._apollo
      .query<any>({
        query: gql`
          query {
            currentUser {
              id
              name
              wallets {
                id
                amount
                currency
              }
            }
          }
        `,
      })
      .pipe(map((response: any) => response.data.currentUser as UserModel));
  }
}
