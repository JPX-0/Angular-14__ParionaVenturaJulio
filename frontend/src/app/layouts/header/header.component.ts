import { Component, Input, OnInit } from '@angular/core';
import { ShowMenuService } from './services/show-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() renderText!: string;

  page!: string;
  menu: ShowMenuService = this.service;

  constructor(
    private service: ShowMenuService
  ) {}

  ngOnInit(): void {
    this.page = this.renderText;
  }

}
