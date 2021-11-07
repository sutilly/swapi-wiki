import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchTerm: string;
  showClearButton: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm; }
    })
  }

  search() {
    if (this.searchTerm) {
      this.showClearButton = true;
      this.router.navigateByUrl('characters/search/' + this.searchTerm);
    }
    // todo: add search input validation and display message when empty
  }

  showAll() {
    this.showClearButton = false;
    this.searchTerm = "";
    this.router.navigateByUrl('characters/list');
  }
}
