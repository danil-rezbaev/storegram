import React from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'

function PlaceOrderPage () {
  return (
    <Page className="page--place-order">
      <PageHeader title="Оформить заказ" backLink="/basket" />
    </Page>
  )
}

export default PlaceOrderPage
