import React, { FC, useCallback, useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/optionsQuizSlice'
import _ from 'lodash'

export type SelectPropertyItemProps = {
  id: number,
  productId: number,
  title: string,
  index: number,
  length: number,
  type: Fields,
  options: ProductItemOptionsValue[],
  optionsArray: ProductItemOptions[],
}

const SelectPropertyItem: FC<SelectPropertyItemProps> = (props) => {
  const {
    productId,
    id,
    index,
    length,
    title,
    optionsArray
  } = props

  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state.optionsQuizSlice)

  const {
    questions
  } = store

  const currentQuestion = useMemo(() => _.find(questions, (item) => item.id === id), [questions, id])

  const currentQuestionFilled = useMemo(() => currentQuestion?.filled, [currentQuestion])

  const showModal = useCallback(() => {
    dispatch(openModal({ questions: optionsArray, productId, questionCounter: index, questionLength: length }))
  }, [index, length])

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  return (
    <div className="select-property-item" onClick={showModal}>
      <p className="select-property-item--title">{ titleFormat }</p>

      <Button
        variant={currentQuestionFilled ? 'success' : 'dark'}
        size="sm"
        className="text-white"
      >
        {currentQuestionFilled ? 'выбрано' : 'выбрать'}
      </Button>
    </div>
  )
}

export default SelectPropertyItem
