import React, { FC } from 'react'
import cs from 'classnames'
import { ReactComponent as LocationIcon } from '../../../../assets/images/pages/basket/location.svg'

export type TabBlockListProps = {
  address: string,
  filled: boolean,
  hint: string,
  className?: string
}

const WayGettingList: FC<TabBlockListProps> = (props) => {
  const {
    address,
    filled,
    hint,
    className
  } = props

  if (!filled) {
    return <p className="mt-1 mb-1">{hint}</p>
  }

  return (
    <ul className={cs('way-getting-list', className)}>
      <li
        key={address}
        className="way-getting-list--item"
      >
        <LocationIcon className="item--icon"/>
        <p className="item--title">{address}</p>

        {/* { item.price */}
        {/*  ? <RenderPrice price={item.price}/> */}
        {/*  : null } */}
      </li>
    </ul>
  )
}

export default WayGettingList
