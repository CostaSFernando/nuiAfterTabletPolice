import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-prender',
  templateUrl: './prender.component.html',
  styleUrls: ['./prender.component.sass']
})
export class PrenderComponent implements OnInit {

  searchUser: any = null

  listArt: any[] = [];

  reducaoServicos = 0

  quantidadeServicos = 0

  valorMulta = 0

  constructor(
    private auth: AuthService,
    private router: Router,
    private menu: MenuService
  ) {
  }

  ngOnInit(): void {

    this.menu.updateMenu(false);

    this.auth.verifyLoged().pipe(map(x => {
      !x? this.router.navigate(['/login']) : ''
    }));

    this.auth.getSearchUser().subscribe(
      user => {
        if (user)
          this.searchUser = user
    });
  }

  updateValuesArt({listArt, quantidadeServicos, valorMulta}: any) {
    console.log(listArt, quantidadeServicos, valorMulta);

    this.listArt = listArt

    this.quantidadeServicos = quantidadeServicos

    this.valorMulta = valorMulta

  }

}
