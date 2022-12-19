export type ProductCategory = {
  code: string,
  title: string
}

export type ProductItemPropertiesValues = {
  id: number,
  title: string,
  priceСhange: number
}

export type ProductItemProperties = {
  id: number,
  title: string,
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

export type ProductType = {
  id: number,
  category: ProductCategory,
  items: ProductItem[]
}
