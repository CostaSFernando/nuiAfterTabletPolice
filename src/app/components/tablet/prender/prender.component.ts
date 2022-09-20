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

  reducaoServicos = 0

  quantidadeServicos = 0

  valorMulta = 0

  codPenal = [
    {
      art:"01",
      crime:"Abandono de Aeronave",
      servicos: 0,
      multa: 10000,
      fianca:"0",
      obs:"Tanto para funcioários públicos como para civil."
    },
    {
      art:"02",
      crime:"Colocar aeronave em Situação de Risco",
      servicos: 80,
      multa: 5000,
      fianca:"0",
      obs:"Tanto para funcioários públicos como para civil."
    },
    {
      art:"03",
      crime:"Pousar Em Locais Proibidos como Praças,telhados e no meio de vias públicas.",
      servicos: 0,
      multa: 10000,
      fianca:"0",
      obs:"(Obs. Se a aeronave estiver em Ocorrência essa multa não se aplica.)"
    },
    {
      art:"04",
      crime:"Voar em Baixa Altitude.",
      servicos: 0,
      multa: 20000,
      fianca:"0",
      obs:"(Obs. Se a aeronave estiver em Ocorrência essa multa não se aplica.)"
    },
    {
      art:"05",
      crime:"Condução Perigosa | Veiculo Irregular",
      servicos: 0,
      multa: 1000,
      fianca:"0",
      obs:"Apreensão|Retenção do Veículo."
    },
    {
      art:"06",
      crime:"Conduzir Veículo Acima da Velocidade Permitida.",
      servicos: 0,
      multa: 1500,
      fianca:"0",
      obs:"Acima de 150 KM|H."
    },
    {
      art:"07",
      crime:"Disputas de corridas ilegais.",
      servicos: 40,
      multa: 3500,
      fianca:"0",
      obs:"Retenção do Veículo. (Obs. esse crime ja está incluido os crimes de condução perigosa, dano ao patrimonio publico e fuga de abordagem policial.)"
    },
    {
      art:"08",
      crime:"Estacionar em Local Proibido.",
      servicos: 0,
      multa: 500,
      fianca:"0",
      obs:"Só é permitido uma nova multa, 30 min após a anterior (Será verificado no Log)."
    },
    {
      art:"09",
      crime:"Fuga de Abordagem Policial.",
      servicos: 30,
      multa: 2000,
      fianca:"0",
      obs:"N|A"
    },
    {
      art:"10",
      crime:"Omissão de socorro.",
      servicos: 50,
      multa: 3000,
      fianca:"0",
      obs:"Pode ser configurado como homicídio culposo. (Pode ser aplicado a Policiais)"
    },
    {
      art:"11",
      crime:"Transitar na contra mão, na pista de via Única.",
      servicos: 0,
      multa: 500,
      fianca:"0",
      obs:"N|A"
    },
    {
      art:"12",
      crime:"Usar buzina prolongada e sucessivamente.",
      servicos: 0,
      multa: 1000,
      fianca:"0",
      obs:"N|A"
    },
    {
      art:"13",
      crime:"Ameaça",
      servicos: 40,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"14",
      crime:"Assédio",
      servicos: 0,
      multa: 0,
      fianca:"Inafiançável",
      obs:"Ban da Cidade"
    },
    {
      art:"15",
      crime:"Atentado ao pudor",
      servicos: 90,
      multa: 80000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"16",
      crime:"Assédio contra menor de idade",
      servicos: 0,
      multa: 0,
      fianca:"Inafiançável",
      obs:"Ban da Cidade"
    },
    {
      art:"17",
      crime:"Roudo a Registradora",
      servicos: 30,
      multa: 200,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"18",
      crime:"Roudo a caixa eletrônico",
      servicos: 40,
      multa: 1000,
      fianca:"Inafiançável",
      obs:"Sujeito a serviço comunitario."
    },
    {
      art:"19",
      crime:"Roudo a loja de Departameto",
      servicos: 40,
      multa: 15000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"20",
      crime:"Roudo a Loja de Armas",
      servicos: 50,
      multa: 15000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"21",
      crime:"Roubo a joalheria",
      servicos: 80,
      multa: 1000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"22",
      crime:"Roudo a Banco Flecca",
      servicos: 40,
      multa: 1000,
      fianca:"Inafiançável",
      obs:"Sujeito a serviço comunitario."
    },
    {
      art:"23",
      crime:"Roubo a Banco Central e Paleto",
      servicos: 100,
      multa: 70000,
      fianca:"25000",
      obs:"N|A"
    },
    {
      art:"24",
      crime:"Roubo e Tentativa de Roubo",
      servicos: 40,
      multa: 3000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"25",
      crime:"Roubo à residência",
      servicos: 30,
      multa: 1000,
      fianca:"50000",
      obs:"(Obs. Fiança só com a presença de uma Advogado)"
    },
    {
      art:"26",
      crime:"Roubo e Tentativa de Roubo",
      servicos: 40,
      multa: 3000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"27",
      crime:"Roubo à residência",
      servicos: 30,
      multa: 1000,
      fianca:"50000",
      obs:"(Obs. Fiança só com a presença de uma Advogado)"
    },
    {
      art:"28",
      crime:"Calúnia, Injúria & Difamação",
      servicos: 50,
      multa: 70000,
      fianca:"25000",
      obs:"Afirmações falsas sobre alguém, de forma que ofenda à honra daquela pessoa."
    },
    {
      art:"29",
      crime:"Desacato.",
      servicos: 60,
      multa: 10000,
      fianca:"65000",
      obs:"Como agravante em processo de detenção, poderá ser somado 15 serviços. (Obs. Fiança só com a presença do advogado)"
    },
    {
      art:"30",
      crime:"Desobediência",
      servicos: 30,
      multa: 15000,
      fianca:"60000",
      obs:"Desobedecer ordem legal de um servidor público. (Obs. Fiança só com a presença do Advogado)"
    },
    {
      art:"31",
      crime:"Resistencia",
      servicos: 25,
      multa: 2000,
      fianca:"Inafiançável",
      obs:"Agravantes deverão ser acrescentados se houver."
    },
    {
      art:"32",
      crime:"Suborno",
      servicos: 30,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"33",
      crime:"Estelionato.",
      servicos: 35,
      multa: 10000,
      fianca:"Inafiançável",
      obs:"Vender algo que não te pertence."
    },
    {
      art:"34",
      crime:"Extorsão.",
      servicos: 30,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"35",
      crime:"Falsidade Ideológica.",
      servicos: 50,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"A multa poderá ser dobrada caso a finalidade seja ludibriar medidas do órgão publico."
    },
    {
      art:"36",
      crime:"Falso Testemunho.",
      servicos: 30,
      multa: 25000,
      fianca:"Inafiançável",
      obs:"Agravante mediante a presença do órgão juridico. A pena poderá ser dobrada.(Obs. Essa pena não tem redução por bom comportamento e por ser Réu Primário)"
    },
    {
      art:"37",
      crime:"Formação de Quadrilha.",
      servicos: 150,
      multa: 10000,
      fianca:"Inafiançável",
      obs:"Acima de 4 membros. (Obs.Essa pena só é usada com Julgamento)"
    },
    {
      art:"38",
      crime:"Furto.",
      servicos: 35,
      multa: 10000,
      fianca:"Inafiançável",
      obs:"Quando NÃO há ameaça ou violência com a vítima."
    },
    {
      art:"39",
      crime:"Tentativa de Homicídio",
      servicos: 40,
      multa: 20000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"40",
      crime:"Homicídio Doloso",
      servicos: 70,
      multa: 25000,
      fianca:"Inafiançável",
      obs:"Quando há intenção de matar."
    },
    {
      art:"41",
      crime:"Homicídio Culposo",
      servicos: 50,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"Quando não há intenção de matar, aplicação de acordo com a configuração da infração."
    },
    {
      art:"42",
      crime:"Homicídio a Servidor Público(Policiais, funcionários da Prefeitura, e Funcionários públicos do Judiciário)",
      servicos: 100,
      multa: 25000,
      fianca:"Inafiançável",
      obs:""
    },
    {
      art:"43",
      crime:"Latrocínio",
      servicos: 150,
      multa: 25000,
      fianca:"Inafiançável",
      obs:"Roubo seguido de morte."
    },
    {
      art:"44",
      crime:"Perturbação da Paz",
      servicos: 30,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"45",
      crime:"Porte Ilegal de Armas Leves",
      servicos: 40,
      multa: 10000,
      fianca:"60000",
      obs:"Pistolas (Obs. Fiança só com a presença do Advogado)"
    },
    {
      art:"46",
      crime:"Porte Ilegal de Armas Médias",
      servicos: 60,
      multa: 20000,
      fianca:"80000",
      obs:"Submetralhadoras (Obs. Fiança só com a presença do Advogado)"
    },
    {
      art:"47",
      crime:"Porte Ilegal de Armas Pesadas",
      servicos: 80,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"48",
      crime:"Porte Ilegal De Dinheiro Sujo",
      servicos: 20,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"Soma-se 2 meses a cada 5 mil sujo."
    },
    {
      art:"49",
      crime:"Porte de Itens Ilegais",
      servicos: 40,
      multa: 3000,
      fianca:"60000",
      obs:"Pena conforme o item e seu grau de periculosidade.(Obs. Fiança só com a presença de Advogado)"
    },
    {
      art:"50",
      crime:"Porte Ilegal de Munições",
      servicos: 30,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"51",
      crime:"Propagação de Ódio",
      servicos: 15,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Foto de cadáveres, drogas ilícitas e porte ilegal de armamento."
    },
    {
      art:"52",
      crime:"Receptação",
      servicos: 25,
      multa: 5000,
      fianca:"30000",
      obs:"Receptação é o ato de adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que sabe ser produto de crime, ou influir para que terceiro, de boa-fé, a adquira, receba ou oculte."
    },
    {
      art:"55",
      crime:"Sequestro",
      servicos: 100,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"56",
      crime:"Sonegação de Imposto (Multas não pagas)",
      servicos: 0,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"1 mês a cada mil reais de multa."
    },
    {
      art:"57",
      crime:"Tentativa de Homicídio ao Servidor Público (Policiais, funcionários da Prefeitura, e Funcionários públicos do Judiciário).",
      servicos: 70,
      multa: 25000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"58",
      crime:"Tráfico de drogas",
      servicos: 30,
      multa: 50000,
      fianca:"30000",
      obs:"Será considerado trafico acima de 3 unidades de entorpencente , a cada 10 a pena será aumentada em 5 serviços. (Obs. Fiança só com a presença de Advogado)"
    },
    {
      art:"59",
      crime:"Tráfico de Armas",
      servicos: 70,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Acima de 3 Armas"
    },
    {
      art:"60",
      crime:"Uso de equipamentos Balísticos e Milítares",
      servicos: 0,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"Coldres, Coletes|EquipamentosMilitares."
    },
    {
      art:"61",
      crime:"Ocultação facial",
      servicos: 0,
      multa: 1000,
      fianca:"Inafiançável",
      obs:"Agravantes deverão ser acrescentados se houver."
    },
    {
      art:"62",
      crime:"Dano ao Patrimônio.",
      servicos: 30,
      multa: 10000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"63",
      crime:"Falta de conduta Polícial",
      servicos: 80,
      multa: 6000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"64",
      crime:"Corrupção Ativa",
      servicos: 0,
      multa: 0,
      fianca:"Inafiançável",
      obs:"Ban da cidade"
    },
    {
      art:"65",
      crime:"Corrupção Passiva",
      servicos: 150,
      multa: 100000,
      fianca:"Inafiançável",
      obs:"Exoneração"
    },
    {
      art:"66",
      crime:"Abandono de Posto|Função",
      servicos: 50,
      multa: 2000,
      fianca:"Inafiançável",
      obs:"As punições serão dobradas em reincidencias e será punido pela TJ-AF."
    },
    {
      art:"67",
      crime:"Uniformização fora do padrão",
      servicos: 80,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"68",
      crime:"Insubordinação",
      servicos: 60,
      multa: 100000,
      fianca:"Inafiançável",
      obs:"Punição administrativa passível  Exoneração."
    },
    {
      art:"69",
      crime:"Desrespeito a Hierarquia",
      servicos: 100,
      multa: 0,
      fianca:"Inafiançável",
      obs:"Punição administrativa"
    },
    {
      art:"70",
      crime:"Vazamento de informações confidências",
      servicos: 150,
      multa: 100000,
      fianca:"Inafiançável",
      obs:"Banimento permanente do serviço de segurança publica."
    },
    {
      art:"71",
      crime:"Portar armamento fora de sua Patente",
      servicos: 60,
      multa: 100000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"72",
      crime:"Obstrução de Justiça",
      servicos: 60,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Realizar átos afim de prejudicar processos de investigação para beneficio próprio."
    },
    {
      art:"73",
      crime:"Abandono de VTR",
      servicos: 0,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"Essa pena só pode ser aplicada por 1º Sargento"
    },
    {
      art:"74",
      crime:"Prevaricação",
      servicos: 60,
      multa: 100000,
      fianca:"Inafiançável",
      obs:"Negar ou não cumprir com o dever da função sendo conivente com atos ilegais|imorais."
    },
    {
      art:"75",
      crime:"Utilizar viatura que não seja de sua patente, variada ou Danificada.",
      servicos: 0,
      multa: 1000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"76",
      crime:"Disparos com arma de fogo dentro do Departamento Policial.",
      servicos: 60,
      multa: 6000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"77",
      crime:"Procedimento Incorreto",
      servicos: 100,
      multa: 0,
      fianca:"Inafiançável",
      obs:"Punição aplicada pelo Alto-Comando, Oficiais e concursados TJ-AF"
    },
    {
      art:"78",
      crime:"Mal manuseio do armamento Militar e Sair de Serviço com armamento Polícial.",
      servicos: 150,
      multa: 80000,
      fianca:"Inafiançável",
      obs:"O oficial que receber essa punição tera que ficar 3 dias sem rádio patrulha e perdará todos os cursos de armamento"
    },
    {
      art:"79",
      crime:"Funcionar Sem Alvará (Empresas com mais de 3 funcionários)",
      servicos: 0,
      multa: 6000,
      fianca:"Inafiançável",
      obs:"Multa de R$ 1.000,00 por dia após vencimento de notificação."
    },
    {
      art:"80",
      crime:"Funcionar Sem MEI (Empresas com até 3 funcionários)",
      servicos: 0,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"Multa de R$1.000,00 por dia após vencimento de notificação."
    },
    {
      art:"81",
      crime:"Falsificação de documentos",
      servicos: 60,
      multa: 7000,
      fianca:"25000",
      obs:"Multa de R$ 7.000,00 por documento falsificado. (Obs. Fiança só com a presença do Advogad)"
    },
    {
      art:"82",
      crime:"Evasão de Divisa.",
      servicos: 60,
      multa: 8000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"83",
      crime:"Sonegação.",
      servicos: 30,
      multa: 7000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"84",
      crime:"Abandono de Incapaz ",
      servicos: 100,
      multa: 250000,
      fianca:"180000",
      obs:"Em caso de reincidencia os responsáveis pelo menor poderá perder a guarda."
    },
    {
      art:"85",
      crime:"Propagar Desordem ",
      servicos: 45,
      multa: 7000,
      fianca:"Inafiançável",
      obs:"Propagar baderna e desordem em ambientes como : Hospital , Mecanica e Departamento Policial."
    },
    {
      art:"86",
      crime:"Trafico de Munições",
      servicos: 50,
      multa: 30000,
      fianca:"Inafiançável",
      obs:"Quantidades acima de 50 a para pessoas com porte de Arma."
    },
    {
      art:"87",
      crime:"Porte de Equipamentos Explosivos (Ilegal)",
      servicos: 40,
      multa: 5000,
      fianca:"Inafiançável",
      obs:"C4 e Polvora - Ambos os itens tornam-se ilegais com a falta da Licença de Fabricação."
    },
    {
      art:"88",
      crime:"Corrupção de Menores",
      servicos: 150,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Utilizar|incentivar menores para realização de atos ilegais|libidinosos de modo geral."
    },
    {
      art:"89",
      crime:"Fuga do Presidio de Segurança Maxima",
      servicos: 60,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Essa pena será somada com a pena inicial."
    },
    {
      art:"90",
      crime:"Falso Testemunho",
      servicos: 50,
      multa: 50000,
      fianca:"Inafiançável",
      obs:"Realizar falsas afirmações com o intuito de prejudicar tanto pessoas como investigações policiais."
    },
    {
      art:"91",
      crime:"Quebra do Protocolo de Segurança Militar em Instalações",
      servicos: 60,
      multa: 0,
      fianca:"Inafiançável",
      obs:"O Civil deverá acatar as ordens impostas em instalações Militares como DP e Presidio."
    },
    {
      art:"92",
      crime:"Roubo a VTR",
      servicos: 60,
      multa: 2000,
      fianca:"Inafiançável",
      obs:"N|A"
    },
    {
      art:"93",
      crime:"Invasão de Propriedade Privada",
      servicos: 100,
      multa: 6000,
      fianca:"90000",
      obs:"(Obs. Fiança só com a presença do Advogado)"
    }
  ];

  listArt: any[] = [];

  listCodPenal: any[];

  searchUser: any = null

  constructor(
    private auth: AuthService,
    private router: Router,
    private menu: MenuService
  ) {
    this.listCodPenal = this.codPenal
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

  verifySelectedArt(artSearch: any) {

    const value = this.listArt.find(art => {

      if (art.art+'' === artSearch.art) {
        return true
      }
      return false
    });
    return !!value
  }

  filterCodPenal(value: any) {
    this.listCodPenal = this.codPenal.filter(cod => cod.crime.includes(value.target.value));
  }

  selectedArt(art: any, codigoPenal: any) {
    if (art.target.checked) {
      //increment
      this.listArt.push(codigoPenal)
      this.quantidadeServicos = this.quantidadeServicos + codigoPenal.servicos
      this.valorMulta = this.valorMulta + codigoPenal.multa
    } else {
      //remove
      this.quantidadeServicos = this.quantidadeServicos - codigoPenal.servicos
      this.listArt = this.listArt.filter( art => art.art !== codigoPenal.art)
      this.valorMulta = this.valorMulta - codigoPenal.multa
    }
  }
}
