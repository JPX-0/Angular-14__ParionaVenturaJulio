import { Component, Input, OnInit } from '@angular/core';
import { ShowMenuService } from '../../services/show-menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() renderText!: string;

  menu: ShowMenuService = this.service;
  webSite!: string;

  constructor(
    private service: ShowMenuService
  ) {}

  ngOnInit(): void {
    this.webSite = this.renderText;
  }

}
