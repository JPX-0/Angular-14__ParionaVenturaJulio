import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountType } from '../../models/session.model';
import { SesionService } from '../../services/auth/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: SesionService
  ) { }

  ngOnInit(): void {}
  user(): Observable<AccountType | "invitado"> {
    return this.service.account()!
  }

}
