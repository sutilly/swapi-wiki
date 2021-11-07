import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchTerm: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchTerm)
      this.router.navigateByUrl('characters/search/' + this.searchTerm);
  }

  showAll() {
     this.router.navigateByUrl('characters/list');
  }
}
