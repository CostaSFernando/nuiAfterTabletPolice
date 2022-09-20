import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  openMenu = false;

  searchPass: string = '';

  constructor(
    private router: Router,
    private menusService: MenuService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.menusService.getStatusMenu().subscribe(
      result => this.openMenu = result
    )
  }

  menu() {
    this.menusService.updateMenu();
  }

  search() {
    this.auth.searchUser(+this.searchPass).subscribe(
      user => {
        console.log(user);
      }
    )
  }

}
