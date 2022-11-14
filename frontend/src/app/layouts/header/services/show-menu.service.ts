import { Injectable } from '@angular/core';

@Injectable()
export class ShowMenuService {

  showMenu: boolean = false;

  constructor() {}

  toggle(): void {
    this.showMenu = !this.showMenu;
  }
  get(): boolean {
    return this.showMenu;
  }

}
