export interface Iacao {
  id: number,
  nome: string,
  valorRoubado: number,
  finalizada: boolean,
  data: Date,
  policiais?: {
    id: number,
    nome: string
  }[],
  win?: boolean
}
