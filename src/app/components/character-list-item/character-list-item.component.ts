import {Component, Input, OnInit} from '@angular/core';
import {SWCharacter} from "../../models/models";

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  @Input() char: SWCharacter;

  constructor() {
  }

  ngOnInit(): void {
  }

}
