import { Component, OnInit } from '@angular/core';
import {SWCharacter} from "../../models/models";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characterList: SWCharacter[];
  errorMessage: string = "";

  constructor(private charService: CharacterService) { }

  ngOnInit(): void {
    this.charService.getStarWarsCharacters().subscribe(res => {
      this.characterList = res.results;
    }, err => {
      // TODO display error message
      return [];
    })
  }
}
