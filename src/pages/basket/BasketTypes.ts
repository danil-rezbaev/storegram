import { Fields } from '../../layout/types/catalog/productsDataTypes'

export type ProductOptionItem = {
  id: string,
  title: string,
  priceChange: number
}

export type ProductOptionType = {
  id: string,
  title: string,
  optionType: Fields,
  values: ProductOptionItem[]
}

export type Product = {
  _id: string,
  images: string[],
  title: string,
  description: string,
  category: string,
  price: number,
  options?: ProductOptionType[]
}
