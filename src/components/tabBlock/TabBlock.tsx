import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import cs from 'classnames'
import { ReceivingMethods } from '../../layout/types/catalog/productsDataTypes'
// import TabBlockList from './TabBlockList'
// import { useAppSelector } from '../../hooks/redux'

export type TabBlockProps = HTMLDivElement & {
  data: ReceivingMethods[]
}

const TabBlock: FC<TabBlockProps> = (props) => {
  const {
    data,
    className
  } = props

  const [activeTab, setActiveTab] = useState<string | null>(null)
  // const clientAdrressesStore = useAppSelector(store => store.clientAdrresses)
  // const { addresses, filled } = clientAdrressesStore

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name
    setActiveTab(targetName)
  }, [])

  return (
    <div className={cs('tab-block', className)}>
      <div className="tab-block--header">
        {data.map((item) => (
          <button
            key={item.id}
            type="button"
            name={item.name}
            className={cs('tab-block--control', item.name === activeTab ? 'active' : null)}
            onClick={buttonClick}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="tab-block--content">
        {/* { activeTab === 'delivery' */}
        {/*  ? ( */}
        {/*    <TabBlockList list={addresses} /> */}
        {/*    ) */}
        {/*  : null } */}
      </div>
    </div>
  )
}

export default TabBlock
