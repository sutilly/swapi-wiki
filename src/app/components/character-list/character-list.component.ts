import {Component, OnInit} from '@angular/core';
import {Page} from "../../models/models";
import {CharacterService} from "../../services/character.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  currentPage: Page;
  currentPageNumber: string | number;
  errorMessage: string = "";

  constructor(private charService: CharacterService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.loadSearchResult(params.searchTerm);
      } else {
        this.loadPage();
      }
    })
  }

  loadSearchResult(searchTerm: string) {
    this.charService.getCharactersByName(searchTerm).subscribe(res => {
      this.currentPage = res;
      this.currentPageNumber = this.getCurrentPageNumber(res)
    })
  }

  loadPage(url?: string) {
    this.charService.getStarWarsCharacters(url).subscribe(res => {
      this.currentPage = res;
      this.currentPageNumber = this.getCurrentPageNumber(res);
    }, err => {
      // TODO display error message
      return [];
    })
  }

  onPageChange(url: string) {
    this.loadPage(url);
  }

  getCurrentPageNumber(currentPage: Page) {
    return !currentPage.previous ? 1 : parseInt(currentPage.previous.replace(/[^0-9]/g, "")) + 1;
  }

}
