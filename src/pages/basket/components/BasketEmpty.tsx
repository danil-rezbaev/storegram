import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export type BasketEmptyProps = unknown

const BasketEmpty: FC<BasketEmptyProps> = () => {
  const { t } = useTranslation()

  return (
    <main>
      <h2 className="m-auto">{ t('basket:empty.title') }</h2>
      <Link to='/catalog' className="d-block mt-3">
        {t('basket:empty.buttons.goInCatalog')}
      </Link>
    </main>
  )
}

export default BasketEmpty
