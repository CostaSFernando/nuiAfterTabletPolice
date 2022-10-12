import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IntegrationService } from 'src/app/services/integration.service';

@Component({
  selector: 'app-multar',
  templateUrl: './multar.component.html',
  styleUrls: ['./multar.component.sass']
})
export class MultarComponent implements OnInit {

  searchUser: any

  multiplicadorMulta = 50

  valorMulta = 0

  constructor(
    private auth: AuthService,
    private integrationService: IntegrationService
  ) { }

  ngOnInit(): void {
    this.auth.getSearchUser().subscribe(
      user => {
        if (user)
          this.searchUser = user
    });
  }

  get calcMulta() {
    if (this.multiplicadorMulta > 50)
      return this.valorMulta + (((this.multiplicadorMulta - 50) / 100) * this.valorMulta)
    else if (this.multiplicadorMulta < 50)
      return this.valorMulta - (((50 - this.multiplicadorMulta) / 100) * this.valorMulta)
    else
      return this.valorMulta;
  }

  getValues({valorMulta, ...data}: any) {
    this.valorMulta = valorMulta
  }



  finePlayer() {
    this.integrationService.setFine({passaporte: this.searchUser.passaporte, multa: this.calcMulta, reason: 'Not a reason'}).subscribe(
      fine => {
        console.log(fine);

      }
    )
  }

}
