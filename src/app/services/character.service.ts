import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import { Page } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
  }

  // Get Characters per Page
  getStarWarsCharacters(pageUrl?: string): Observable<Page> {
    let url = environment.BASE_URL;

    if (pageUrl) {
      url = pageUrl;
    }

    return this.http.get<Page>(url)
      .pipe(
        catchError(err => {
          let errMessage: string;
          if (err.error instanceof ErrorEvent) {
            errMessage = `Error: ${err.error.message}`;
          } else {
            errMessage = this.getServerErrorMessage(err);
          }
          return throwError(errMessage)
        })
      );
  }


  getServerErrorMessage(err: HttpErrorResponse) {
    switch (err.status) {
      case 404: {
        return `Not found: ${err.message}`;
      }
      case 500: {
        return `Internal Server Error: ${err.message}`;
      }
      default: {
        return `Unknown Server Error: ${err.message}`;
      }
    }
  }
}
