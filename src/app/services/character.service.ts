import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {EMPTY, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, expand, map, reduce} from "rxjs/operators";
import {Page, SWCharacter} from "../models/models";

const CHAR_SERVICE_URL = `${environment.BASE_URL}people/`

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
  }

  // Get characters per Page
  getStarWarsCharacters(pageUrl = CHAR_SERVICE_URL): Observable<Page> {
    return this.http.get<Page>(pageUrl)
      .pipe(
        catchError(err => {
          return this.handleError(err);
        })
      )
  }

  // Get all characters
  getAllStarWarsCharacters(): Observable<SWCharacter[]> {
    return this.getStarWarsCharacters().pipe(
      expand(res => res.next ? this.getStarWarsCharacters(res.next) : EMPTY),
      map(res => res.results),
      reduce((accData, data) => accData.concat(...data)),
    )
  }

  // Get characters by search term
  getCharactersByName(searchTerm: string): Observable<Page> {
    let url = `${CHAR_SERVICE_URL}/?search=${searchTerm}`;
    return this.http.get<Page>(url)
      .pipe(
        catchError(err => {
          return this.handleError(err);
        })
      )
  }

  // Error Handling
  private handleError(err: HttpErrorResponse) {
    let errMessage = "Unknown error";
    if (err.error instanceof ErrorEvent) {
      // Client side Error
      errMessage = `A client side error occurred`;
    } else {
      // Server Side Error
      errMessage = `A server side error occurred – Error Code ${err.status}`;
    }
    return throwError(errMessage)
  }
}
