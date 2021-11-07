import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Planet} from "../models/models";

const PLANET_SERVICE_URL = `${environment.BASE_URL}planets/`

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanetByUrl(url:string):Observable<Planet> {
    return this.http.get<Planet>(url)
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
  }
}
