import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multar',
  templateUrl: './multar.component.html',
  styleUrls: ['./multar.component.sass']
})
export class MultarComponent implements OnInit {

  multiplicadorMulta = 50

  valorMulta = 0

  constructor() { }

  ngOnInit(): void {
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

}
