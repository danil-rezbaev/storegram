import { Product } from '../../pages/basket/BasketTypes'
import { Category } from './Category'

export type Store = {
  _id: string,
  title: string,
  products: Product[],
  currency: string,
  categories: Category[]
}
