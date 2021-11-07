import {Component, Input, OnInit} from '@angular/core';
import {SWCharacter} from "../../models/models";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  @Input() char: SWCharacter;
  homeplanet: string;

  constructor(private planetService: PlanetService) {
  }

  ngOnInit(): void {
    if (this.char) {
      this.planetService.getPlanetByUrl(this.char.homeworld).subscribe(res => {
        this.homeplanet = res.name;
      }, err => {
        this.homeplanet = "Unknown";
      })
    }
  }

}
