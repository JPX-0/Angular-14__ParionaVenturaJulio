import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() renderText!: string;

  copywrite!: string;

  constructor() {}

  ngOnInit(): void {
    this.copywrite = this.renderText;
  }

}
