import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  userSearch: {
    name?: string,
    passaporte: string,
    idade?: string,
    patente?: string,
    unidade?: string,
    tel?: string,
    rg?: string,
    emprego?: string
  } | undefined | any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.verifyLoged().subscribe(
      x => {
        !x? this.router.navigate(['/login']) : ''
      }
    );

    this.auth.getSearchUser().subscribe(user => {
      this.userSearch = user
    });
  }

  searchUser(pass: any) {
    this.auth.searchUser(+pass.value).subscribe(
      user => {
        this.userSearch = user

      }
    )
  }

  confirm() {
    this.router.navigate(['/prender'])
  }

}
