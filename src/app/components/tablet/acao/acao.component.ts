import { Component, OnInit } from '@angular/core';
import { IntegrationService } from 'src/app/services/integration.service';
import { Iacao } from 'src/app/share/model/acao.interface';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.sass']
})
export class AcaoComponent implements OnInit {

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

  acaoSelect: Iacao

  listPoliceAcao: {id: number, nome: string, passaporte: number}[] = []

  constructor(
    private integrationService: IntegrationService
  ) {
    this.acaoSelect = {} as Iacao
  }

  ngOnInit(): void {
    this.getActions();
    this.getPolicesOnline();
  }

  updateWinAction(e: any) {
    const valueWin = e.target.value === 'true'? true : false;
    this.acaoSelect.win = valueWin
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
    if (selectPolice) {
      if (!this.acaoSelect.policiais) {
        this.acaoSelect.policiais = [];
      }
      this.acaoSelect.policiais.push(selectPolice);
      this.selectAcao(this.acaoSelect);
    }
  }

  getActions() {
    this.integrationService.getListActions().subscribe(
      resp => {
        this.acoes = resp
      }
    )
  }

  getPolicesOnline() {
    this.integrationService.listPoliceOn().subscribe(
      resp => {
        this.listPoliceAcao = resp
      });
  }

  finishAction(action: Iacao) {
    this.integrationService.finishAction({id: action.id, policiais: action.policiais? action.policiais : [], win: !!action.win}).subscribe(
      () => {
        this.getActions()
      }
    )
  }

}
