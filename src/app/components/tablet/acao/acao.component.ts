import { Component, OnInit } from '@angular/core';
import { Iacao } from 'src/app/share/model/acao.interface';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.sass']
})
export class AcaoComponent implements OnInit {

  constructor() { }

  policiais = [
    {
      id: 1,
      passaporte: 91,
      nome: 'Fernando Costa',
    },
    {
      id: 2,
      passaporte: 2,
      nome: 'Dylan boiola',
    },
    {
      id: 3,
      passaporte: 1,
      nome: 'Paula',
    },
    {
      id: 4,
      passaporte: 55,
      nome: 'Leleco',
    }
  ]

  acoes: Iacao[] = [
    {
      id: 1,
      nome: 'Lojinha 1',
      valorRoubado: 64000,
      finalizada: true,
      data: new Date('2022-10-12'),
      policiais: [
        {nome: 'Fernando', id: 1},
        {nome: 'Leleco', id: 4}
      ]
    },
    {
      id: 2,
      nome: 'Lojinha 2',
      valorRoubado: 59000,
      finalizada: true,
      data: new Date('2022-10-10'),
      policiais: [
        {nome: 'Fernando', id: 1},
        {nome: 'Leleco', id: 4},
        {nome: 'Dylan', id: 2}
      ]
    },
    {
      id: 3,
      nome: 'Lojinha 3',
      valorRoubado: 52000,
      finalizada: false,
      data: new Date('2022-10-9')
    }
  ]

  acaoSelect: any

  listPoliceAcao: {id: number, nome: string, passaporte: number}[] = []

  ngOnInit(): void {
  }

  selectAcao(acao: any) {
    this.acaoSelect = acao
    if (acao?.policiais?.length > 0) {
      this.listPoliceAcao = this.policiais.filter(policial => (acao.policiais.find((e: any)  => e.id === policial.id) === undefined))
    } else {
      this.listPoliceAcao = this.policiais;
    }
  }

  removePolice(id: number) {
    this.acoes.filter(acao => {
      if (acao.id === this.acaoSelect.id && acao.policiais) {
        acao.policiais = acao.policiais.filter(police => police.id !== id)
      }
    })
  }

  policeSelectedForAction(police: any) {
    const selectPolice = this.listPoliceAcao.find(e => e.id === parseInt(police.value));
    console.log(this.acaoSelect, selectPolice);

    if (selectPolice) {
      if (!this.acaoSelect.policiais) {
        this.acaoSelect.policiais = [];
      }
      this.acaoSelect.policiais.push(selectPolice);
      this.selectAcao(this.acaoSelect);
    }
  }

}
