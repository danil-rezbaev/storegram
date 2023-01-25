import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import cs from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export type GoInBasketButtonProps = {
  className?: string
}

const GoInBasketButton: FC<GoInBasketButtonProps> = (props) => {
  const { className } = props

  const basketStore = useAppSelector(state => state.basket)
  if (basketStore.quantity <= 0) return null

  const navigate = useNavigate()
  const { t } = useTranslation()

  const onclick = () => {
    navigate('/basket')
  }

  return (
    <BottomButton
      className={cs('goInBasketButton', className)}
      onClick={onclick}
      title={ t('catalog:goInBasketButton.title') }
    />
  )
}

export default GoInBasketButton
