import _ from 'lodash'
import { CurrentOptions } from '../layout/types/catalog/productsDataTypes'

const generateUniqueId = (id: number, data: CurrentOptions): string => (
  _.entries(data).length > 0
    ? _.reduce(_.entries(data), (accum, [title, value]) => {
      return accum += `${id}-${title}:[${_.map(value.values, (item) => item.id).join()}]`
    }, '')
    : id.toString()
)

export default generateUniqueId
