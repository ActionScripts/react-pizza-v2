export type Pizza = {
  id: number
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

export type SearchPizzaParams = {
  category: string
  search: string
  sortBy: string
  order: string
  currentPage: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: Pizza[]
  status: Status
}
