import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router"
import { catchError, Observable, of } from "rxjs";
import { AppStateService } from "../AppStateService";

@Injectable()
export class RouteResolver implements Resolve<any> {

  constructor(private appStateService: AppStateService) { }

  resolve(): Observable<any> {
    console.log('Route Resolver reached');

    return this.appStateService.getCharacterMounts()
      .pipe(catchError(() => {
        return of('Error retrieving character data');
      }));
  }
}
