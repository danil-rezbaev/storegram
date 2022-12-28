export type ProductCategory = {
  code: string,
  title: string
}

export type ProductItemPropertiesValue = {
  id: number,
  productId?: number,
  title: string,
  priceChange: number
}

export type Fields = 'checkbox' | 'radio'

export type ProductItemProperties = {
  id: number,
  title: string,
  type: Fields,
  values: ProductItemPropertiesValue[]
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
  properties?: ProductItemProperties[]
}

export type ProductItemStore = ProductItem & {
  currentProperties: Record<string, ProductItemPropertiesValue[]>,
  count: number,
  totalPrice: number,
}

export type ProductType = {
  id: number,
  category: ProductCategory,
  items: ProductItem[]
}
