import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('logado?');
    if (!this.auth.verifyLoged()) {
      console.log('Sim');
      this.router.navigate(['/login']);
      return;
    }
    console.log('Sim');
  }

}
