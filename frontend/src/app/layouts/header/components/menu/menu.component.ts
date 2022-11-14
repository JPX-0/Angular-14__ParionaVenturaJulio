import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/auth/sesion.service';
import { ShowMenuService } from '../../services/show-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu!: ShowMenuService;

  constructor(
    private mwenuService: ShowMenuService,
    private sesionService: SesionService,
  ) {}

  ngOnInit(): void {
    this.menu = this.mwenuService;
  }

  auth(): Observable<boolean> {
    return this.sesionService.get("authentication")
  }

  logout(): void {
    this.menu.toggle();
    this.sesionService.logout();
  }

}
