import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { ALL_GAME_MOUNTS } from "./data/mounts";

@Injectable({providedIn: 'root'})
export class AppStateService {
  public region: string;
  public realm: string;
  public characterName: string;

  private characterMounts;
  private allGameMounts = ALL_GAME_MOUNTS;

  constructor(private http: HttpClient) { }

  getCharacterMounts() {
    let region = this.region;
    let realm = this.realm;
    let character = this.characterName;

    console.log('Requesting mounts from Angular frontend service..');

    this.characterMounts = this.http.get<any>(`http://localhost:3000/getMounts/${region}/${realm}/${character}`)
    .pipe(map((response: any) => ({
      mounts: response.mounts
    })));

    return this.characterMounts;
  }

  getAllGameMounts() {
    return this.allGameMounts;
  }

  findMissingMounts() {
    console.log(this.allGameMounts[0].id);
  }

  setRegion(value) {
    this.region = value;
  }

  setRealm(value) {
    this.realm = value.toLowerCase();
  }

  setCharacterName(value) {
    this.characterName = value.toLowerCase();
  }

  getMountsFromService() {
    return this.characterMounts;
  }

  getRegion() {
    return this.region;
  }

  getRealm() {
    return this.realm;
  }

  getCharacterName() {
    return this.characterName;
  }
}
