export type ProductCategory = {
  code: string,
  title: string
}

export type ProductItemOptionsValue = {
  id: number,
  productId?: number,
  title: string,
  priceChange: number
}

export type Fields = 'checkbox' | 'radio'

export type ProductItemOptions = {
  id: number,
  title: string,
  type: Fields,
  values: ProductItemOptionsValue[]
}

export type ProductItem = {
  id: number,
  img: string,
  info?: string,
  title: string,
  description: string,
  weight?: number,
  price: number,
  count?: number,
  options?: ProductItemOptions[]
}

export type ProductItemStore = ProductItem & {
  currentOptions: Record<string, ProductItemOptionsValue[]>,
  count: number,
  totalPrice: number,
}

export type ProductType = {
  id: number,
  category: ProductCategory,
  items: ProductItem[]
}
