import React, { FC, useCallback, useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/optionsQuizSlice'
import _ from 'lodash'

export type SelectPropertyItemProps = Omit<ProductItemOptionsValue, 'price'> & Pick<ProductItemOptions, 'type'> & {
  index: number,
  productId: number,
  length: number,
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
    questions,
    selectedOptions
  } = store

  const currentQuestion = useMemo(() => _.find(questions, (item) => item.id === id), [questions, id])
  const currentSelectedOptions = useMemo(() => selectedOptions ? selectedOptions[productId] : undefined, [selectedOptions])
  const currentQuestionFilled = useMemo(() => currentQuestion?.filled, [currentQuestion])

  const showModal = useCallback(() => {
    dispatch(openModal({ questions: optionsArray, productId, questionCounter: index, questionLength: length }))
  }, [index, length])

  const titleFormat = useMemo(() => {
    if (currentSelectedOptions?.[title]) {
      const optionsFormat = currentSelectedOptions[title].map(item => item.title.toLowerCase()).join(', ')
      return `Выбрано: ${optionsFormat}`
    }
    return `Выбрать ${title.toLowerCase()}`
  }, [selectedOptions])

  return (
    <div className="select-property-item" onClick={showModal}>
      <p className="select-property-item--title">{ titleFormat }</p>

      <Button
        variant={currentQuestionFilled ? 'success' : 'dark'}
        size="sm"
        className="text-white"
      >
        {currentQuestionFilled ? 'изменить' : 'выбрать'}
      </Button>
    </div>
  )
}

export default SelectPropertyItem
