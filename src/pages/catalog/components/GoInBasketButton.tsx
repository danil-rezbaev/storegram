import React, { FC } from 'react'
import BottomButton from '../../../components/BottomButton'
import cs from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/redux'

export type GoInBasketButtonProps = {
  className?: string
}

const GoInBasketButton: FC<GoInBasketButtonProps> = (props) => {
  const { className } = props

  const basketQuantity = useAppSelector(state => state.basket.quantity)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onclick = () => {
    navigate('/basket')
  }

  return (
    <BottomButton
      className={cs('goInBasketButton', className, basketQuantity <= 0 ? 'd-none' : null)}
      onClick={onclick}
      title={ t('catalog:goInBasketButton.title') }
    />
  )
}

export default GoInBasketButton
