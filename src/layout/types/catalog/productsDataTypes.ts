export type ProductCategory = {
  code: string,
  title: string
}

export type ProductItemPropertiesValues = {
  id: number,
  title: string,
  priceChange: number
}

export type Fields = 'checkbox' | 'radio'

export type ProductItemProperties = {
  id: number,
  title: string,
  type: Fields,
  values: ProductItemPropertiesValues[]
}

export type ProductItem = {
  id: number,
  img: string,
  title: string,
  description: string,
  weight?: number,
  price: number,
  count?: number,
  properties?: ProductItemProperties[]
}

export type ProductItemStore = ProductItem & {
  currentProperties: ProductItemPropertiesValues[]
}

export type ProductType = {
  id: number,
  category: ProductCategory,
  items: ProductItem[]
}
