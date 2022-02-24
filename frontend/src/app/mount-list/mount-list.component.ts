import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppStateService } from "../AppStateService";
import { ALL_GAME_MOUNTS } from "../data/mounts";
import { MountApiResponse } from "./api-response-model";
import { Mount } from "./mount.model";

@Component({
  selector: 'app-mount-list',
  templateUrl: './mount-list.component.html',
  styleUrls: ['./mount-list.component.css']
})
export class MountListComponent implements OnInit {

  characterName = this.appStateService.getCharacterName();
  region = this.appStateService.getRegion();
  realm = this.appStateService.getRealm();

  mounts: any[] = [];
  missingMounts: any[] = [];
  AllGameMounts = ALL_GAME_MOUNTS;


  constructor(private appStateService: AppStateService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('Mounts component Init');

    this.activatedRoute.data.subscribe((response: MountApiResponse) => {
      console.log('After Resolve data');
      this.mounts = response.data.mounts;
      console.log(response.data.mounts);

      this.mounts = response.data.mounts.map(mount => {
        return <Mount> {
          name: mount.mount.name,
          id: mount.mount.id,

          // always present for character-owned mounts, but not for list of all in-game mounts
          is_useable: mount.is_useable,

          // optional fields for character-owned mounts
          is_favorite: mount.is_favorite,
          is_character_specific: mount.is_character_specific
        }
      })
      this.compileMissingMounts();
      this.missingMounts = this.missingMounts.map(mount => {
        return <Mount> {
          name: mount.name,
          id: mount.id,
        }
      });
    });
  }

  compileMissingMounts() {
    // compare player acquired mounts to complete mount list to determine which are unobtained
    this.missingMounts = this.AllGameMounts.filter(({ id: id1 }) => !this.mounts.some(({ id: id2 }) => id2 === id1));

    console.log(this.missingMounts);
  }
}
