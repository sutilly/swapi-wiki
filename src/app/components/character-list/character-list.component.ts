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
      this.handlePageResult(res);
    }, err => {
      return this.handleAndDisplayError(err)
    })
  }

  loadPage(url?: string) {
    this.charService.getStarWarsCharacters(url).subscribe(res => {
      this.handlePageResult(res);
    }, err => {
      return this.handleAndDisplayError(err)
    })
  }

  onPageChange(url: string) {
    this.loadPage(url);
  }

  handlePageResult(res: Page) {
    if (!res.results.length) {
      this.errorMessage = "No data found."
    } else {
    this.currentPage = res;
    this.currentPageNumber = this.getCurrentPageNumber(res);
    }
  }

  handleAndDisplayError(err: string) {
    this.errorMessage = err;
  }

  getCurrentPageNumber(currentPage: Page) {
    return !currentPage.previous ? 1 : parseInt(currentPage.previous.replace(/[^0-9]/g, "")) + 1;
  }

}
