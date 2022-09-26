import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-cod-penal',
  templateUrl: './base-cod-penal.component.html',
  styleUrls: ['./base-cod-penal.component.sass']
})
export class BaseCodPenalComponent implements OnInit {

  modalDetalhes: any;
  moreInformations: any = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(data: any) {
    (document.getElementById('modalArts') as any).style = 'display: flex';
    this.moreInformations = data.selectedArt
  }

  closeModal() {
    (document.getElementById('modalArts') as any).style = 'display: none'
  }

}
