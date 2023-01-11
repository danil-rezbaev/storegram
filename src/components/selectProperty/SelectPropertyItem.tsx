import React, { FC, useCallback, useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { openModal } from '../../store/optionsQuizSlice'
import _ from 'lodash'

export type SelectPropertyItemProps = Omit<ProductItemOptionsValue, 'priceChange'> & Pick<ProductItemOptions, 'type'> & {
  index: number,
  productId: number,
  length: number,
  optionsArray: ProductItemOptions[],
}

const SelectPropertyItem: FC<SelectPropertyItemProps> = (props) => {
  const {
    id,
    productId,
    index,
    length,
    title,
    optionsArray
  } = props

  const dispatch = useAppDispatch()
  const optionsQuizStore = useAppSelector(state => state.optionsQuiz)

  const {
    questions,
    selectedOptions
  } = optionsQuizStore

  const currentQuestion = useMemo(() => _.find(questions, (item) => item.id === id), [questions])
  const currentSelectedOptions = useMemo(() => selectedOptions ? selectedOptions[productId] : undefined, [selectedOptions])
  const currentQuestionFilled = useMemo(() => currentQuestion?.filled, [currentQuestion])

  const showModal = useCallback(() => {
    dispatch(openModal({ questions: optionsArray, productId, questionCounter: index, questionLength: length }))
  }, [index, length])

  const titleFormat = useMemo(() => {
    if (currentSelectedOptions?.[title]) {
      const optionsFormat = currentSelectedOptions[title].map(item => item.title.toLowerCase()).join(', ')
      return `${title}: ${optionsFormat}`
    }
    return `Выбрать ${title.toLowerCase()}`
  }, [currentSelectedOptions])

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
