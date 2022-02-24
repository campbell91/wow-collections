import { Component } from "@angular/core";
import { AppStateService } from "../AppStateService";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailComponent {
  characterInfo?: { name: string, realm: string, region: string }
  infoValid?: boolean;

  characterName?: string;
  characterRegion?: string;
  characterRealm?: string;
  validName = false;

  constructor(public appStateService: AppStateService) { }

  retrieveMounts(name: string): void {
    this.appStateService.setCharacterName(name);
  }

  validNameLength() {
    if (this.characterName.length < 2 || this.characterName.length > 12) {
      this.validName = false;
    }
    else {
      this.validName = true;
    }
  }

  onNameChanged(currentName) {
    this.characterName = currentName;
    this.validNameLength();
    this.appStateService.setCharacterName(currentName);
  }
}
