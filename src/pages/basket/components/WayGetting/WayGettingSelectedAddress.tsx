import React, { FC } from 'react'
import cs from 'classnames'
import { ReactComponent as LocationIcon } from '../../../../assets/images/pages/basket/location.svg'
import RenderPrice from '../../../../components/RenderPrice'

export type TabBlockListProps = {
  address: string | null,
  filled: boolean,
  hint: string,
  price?: number,
  className?: string
}

const WayGettingSelectedAddress: FC<TabBlockListProps> = (props) => {
  const {
    address,
    filled,
    hint,
    price,
    className
  } = props

  if (!filled || !address) {
    return <p className="mt-1 mb-1">{hint}</p>
  }

  return (
    <div className={cs('way-getting-selected-address', className)}>
      <p
        key={address}
        className="list--item"
      >
        <LocationIcon className="item--icon"/>
        <span className="item--title">{address}</span>

        <RenderPrice price={price}/>
      </p>
    </div>
  )
}

export default WayGettingSelectedAddress
