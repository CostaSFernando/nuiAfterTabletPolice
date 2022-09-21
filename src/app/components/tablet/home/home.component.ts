import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user: any = null

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.auth.verifyLoged()) {
      this.router.navigate(['/login']);
      return;
    }

    this.user = this.auth.getCurrentUser();

  }

}
