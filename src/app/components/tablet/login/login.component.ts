import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  controlMenu = false;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(pass: any) {
    if (this.auth.login(+pass)) {
      this.controlMenu = !this.controlMenu;
      this.menuService.updateMenu(this.controlMenu);
      this.router.navigate(['/']);
    }
  }

}
