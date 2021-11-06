import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from "../../models/models";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() page: Page;
  @Input() pageNumber: string | number;
  @Output() pageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
