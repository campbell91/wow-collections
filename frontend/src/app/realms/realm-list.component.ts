import { Component, OnInit } from "@angular/core";
import { REGIONS } from "../data/regions";
import { REALMS_LIST } from "../data/realms";

import { AppStateService } from "../AppStateService";

@Component({
  selector: 'app-realm-list',
  templateUrl: './realm-list.component.html',
  styleUrls: ['./realm-list.component.css'],
})

export class RealmListComponent implements OnInit {

  regionList = REGIONS;
  usRealms = REALMS_LIST[0].us.realms;
  euRealms = REALMS_LIST[0].eu.realms;

  selectedRegion?: string = this.regionList[0];
  selectedRealm?: string;

  availableRealms = this.usRealms;
  currentRealm: any;

  constructor(public appStateService: AppStateService) { }

  ngOnInit(): void {
      this.appStateService.setRegion(this.selectedRegion);
      this.alphabeticSortRealms();
  }

  alphabeticSortRealms() {
    this.usRealms.sort((a, b) => a.name.localeCompare(b.name));
    this.euRealms.sort((a, b) => a.name.localeCompare(b.name));
  }

  onRealmChanged(currentRealm) {
    console.log('Selected realm: ' + currentRealm);
    this.selectedRealm = this.getSelectedRealmByName(currentRealm);
    this.appStateService.setRealm(this.selectedRealm);
  }

  getSelectedRealmByName(currentRealm: string) {
    return this.availableRealms.find(realm => realm.name === currentRealm).slug;
  }

  updateRegionSelect(region: string): void {
    this.selectedRegion = region;
    this.appStateService.setRegion(region);

    switch (region) {
      case 'us':
        this.availableRealms = this.usRealms;
        break;
      case 'eu':
        this.availableRealms = this.euRealms;
        break;
      default:
        console.log('Error occurred in region select.');
        break;
    }
  }

}
