export type ProductProperties = 'weight'

export type Category = {
  id: number,
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
  values: ProductItemOptionsValue[],
  filled?: boolean
}

export type ProductItemProperties = {
  title: string,
  description?: string,
  table?: Record<string, string>[]
}

export type UniqueId = string

export type Count = number

export type ProductItem = {
  id: number,
  category: string,
  img: string[],
  info?: string,
  title: string,
  description: string,
  price: number,
  count?: Count,
  options?: ProductItemOptions[],
  properties?: ProductItemProperties
}

export type CurrentOptionsValue = {values: ProductItemOptionsValue[], filled: boolean}

export type CurrentOptions = Record<string, CurrentOptionsValue>

export type ProductCurrentOptions = Record<string, CurrentOptions>

export type SelectedOptions = Record<string, Record<string, CurrentOptions & {count: number}>>

export type ProductItemStore = ProductItem & {
  uniqueId: UniqueId,
  currentOptions?: CurrentOptions,
  count: Count,
  totalPrice: number,
}

export type ProductType = {
  id: number,
  category: Category,
  items: ProductItem[]
}

export type TotalProductProperties = {
  count: number,
  price: number,
  basePrice: number,
  totalPrice: number,
  uniqueId: UniqueId,
}

export type DeliveryMethods = {
  id: string | number,
  title: string,
  price?: number
}

export type ReceivingMethods = DeliveryMethods & {
  name: string,
  price: number
}

export type PickupAddresses = {
  id: number,
  title: string
}

export type DeliveryAddress = {
  city: string,
  street: string,
  house: string,
  flat: string,
  entrance: string,
  floor: string,
  comment?: string,
}

export type DeliveryAddressStore = {
  format: string,
  value: DeliveryAddress,
  selected: boolean
}

export type WayGettingMethodType = {
  type: string,
  address: string | null,
  price: number | null,
  filled: boolean
}
