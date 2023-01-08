export type ProductProperties = 'weight'

export type ProductCategory = {
  code: string,
  title: string
}

export type ProductItemOptionsValue = {
  id: number,
  productId?: number,
  title: string,
  price: number
}

export type Fields = 'checkbox' | 'radio'

export type ProductItemOptions = {
  id: number,
  title: string,
  type: Fields,
  values: ProductItemOptionsValue[],
  filled?: boolean
}

export type ProductItem = {
  id: number,
  img: string[],
  info?: string,
  title: string,
  description: string,
  price: number,
  count?: number,
  options?: ProductItemOptions[],
  properties?: Record<ProductProperties, number>
}

export type ProductItemStore = ProductItem & {
  uniqueId: string,
  currentOptions?: Record<string, ProductItemOptionsValue[]>,
  count: number,
  totalPrice: number,
}

export type ProductType = {
  id: number,
  category: ProductCategory,
  items: ProductItem[]
}
