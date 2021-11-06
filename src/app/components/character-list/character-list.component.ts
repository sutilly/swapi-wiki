import { Component, OnInit } from '@angular/core';
import {Page, SWCharacter} from "../../models/models";
import {CharacterService} from "../../services/character.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  currentPage: Page;
  currentPageNumber: string | number;
  errorMessage: string = "";

  constructor(private charService: CharacterService) { }

  ngOnInit(): void {
    this.loadPage();
  }

  onPageChange(url:string) {
    this.loadPage(url);
  }

  loadPage(url?:string) {
    this.charService.getStarWarsCharacters(url).subscribe(res => {
      this.currentPage = res;
      this.currentPageNumber = this.getCurrentPageNumber(this.currentPage);
    }, err => {
      // TODO display error message
      return [];
    })
  }

  getCurrentPageNumber(page: Page) {
    return !page.previous ? 1 :((parseInt(page.previous.replace("https://swapi.dev/api/people/?page=", "")) +1));
    }
}
