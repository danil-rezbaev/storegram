import React from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import WayGetting from '../basket/components/WayGetting/WayGetting'
import { receivingMethodData } from '../../layout/data/basket/receivingMethodsData'

function PlaceOrderPage () {
  return (
    <Page className="page--place-order">
      <PageHeader title="Оформить заказ" backLink="/basket" />

      <WayGetting data={receivingMethodData} />
    </Page>
  )
}

export default PlaceOrderPage
