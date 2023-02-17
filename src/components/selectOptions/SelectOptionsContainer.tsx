import React, { FC, useEffect, useState } from 'react'
import {
  CurrentOptions, ProductCurrentOptions,
  ProductItemOptions,
  ProductItemOptionsValue
} from '../../layout/types/catalog/productsDataTypes'
import _ from 'lodash'
import SelectOptionsQuiz from './SelectOptionsQuiz'

export type SelectPropertyItemProps = {
  optionsArray: ProductItemOptions[],
  optionsHandler: (options: Omit<ProductCurrentOptions, 'count'>) => void,
}

const SelectOptionsContainer: FC<SelectPropertyItemProps> = (props) => {
  const {
    optionsArray,
    optionsHandler
  } = props

  const [questionOptions, setQuestionOptions] = useState<CurrentOptions>({})

  const questionOptionsHandler = (uniqueId: string, values: ProductItemOptionsValue[]) => {
    const isFilled = values.length > 0

    setQuestionOptions((value) => ({
      ...value,
      [uniqueId]: {
        values,
        filled: isFilled
      }
    }))
  }

  useEffect(() => {
    optionsHandler({ values: questionOptions })
  }, [questionOptions])

  return (
    <div className="select-options-container">
      {_.map(optionsArray, (item) => (
        <SelectOptionsQuiz
          key={item.id}
          options={item}
          optionsHandler={questionOptionsHandler}
        />
      ))}
    </div>
  )
}

export default SelectOptionsContainer
