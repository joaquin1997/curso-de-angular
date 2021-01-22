import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styles: [
  ]
})
export class NabvarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  

}
