# Ações

Objeto: 
```typescript
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
```


\------------ Ação reativa \------------


### Message

Ação espera via event ('message') os seguintes parametros: 
```ts
{
  typeAction: listActions,
  listActions: [acao, acao, acao]
}
```
`typeAction` ->  Tipo de ação que a nui deve execultar

`listActions` -> Lista com as ações a serem listadas

<br>

<hr>

### Requests

GET `/listActions` -> Deve retornar uma lista com as ações
<hr>
POST `/updateAction` -> \
Body:
```ts
{
  id: number,
  win: boolean,
  policiais: {
    nome: string,
    id: number
  }
}
```

`id` -> ID da ação que está sendo finalizada \
`win` -> Se ganhou ou perdeu no caso *_true_* para ganhou \
`policiais` -> Lista de policiais que participaram da ação

<hr>

GET `/onPolices` -> Lista os policiais em serviço
```ts
[
  {
    nome: string,
    id: number
  },
  {
    nome: string,
    id: number
  }
]
```
