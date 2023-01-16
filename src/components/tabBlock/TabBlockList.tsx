import React, { FC } from 'react'
import cs from 'classnames'
import { ReceivingMethods } from '../../layout/types/catalog/productsDataTypes'

export type TabBlockListProps = {
  list: ReceivingMethods[],
  className?: string
}

const TabBlockList: FC<TabBlockListProps> = (props) => {
  const {
    list,
    className
  } = props

  return (
    <ul className={cs('tab-block-list', className)}>
      { list.map(item => (
        <li
          key={item.id}
          className="tab-block-list--item"
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default TabBlockList
