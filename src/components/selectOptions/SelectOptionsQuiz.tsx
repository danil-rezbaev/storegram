import React, { FC, useEffect, useState } from 'react'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import SelectOptionsAnswer from './SelectOptionsAnswer'
import _ from 'lodash'
import cs from 'classnames'
import { useTranslation } from 'react-i18next'

export type SelectPropertyQuizProps = {
  options: ProductItemOptions,
  optionsHandler: (uniqueId: string, values: ProductItemOptionsValue[]) => void,
}

const SelectOptionsQuiz: FC<SelectPropertyQuizProps> = (props) => {
  const {
    options,
    optionsHandler
  } = props

  const {
    title,
    optionType,
    values
  } = options

  const { t } = useTranslation()

  const titleFormat = t('catalog:selectPropertyModal.selectProduct', { title: title.toLowerCase() })

  const [checkList, setCheckList] = useState<ProductItemOptionsValue[]>([])

  const isExist = (optionId: string): boolean => {
    if (checkList.length < 1) return false

    const find = _.find(checkList, (item) => (item.id === optionId))
    return !!find
  }

  const handler = (value: ProductItemOptionsValue, type: Fields): void => {
    if (optionType === 'radio') {
      setCheckList([value])
    }

    if (optionType === 'checkbox') {
      const result = isExist(value.id)

      if (result) {
        setCheckList(array => _.filter(array, (item) => (
          item.id !== value.id
        )))
      } else {
        setCheckList(array => array ? [...array, value] : [value])
      }
    }
  }

  useEffect(() => {
    optionsHandler(title, checkList)
  }, [checkList])

  return (
    <div className={ cs('select-options-quiz') }>
      <b className="select-options-quiz--title">{ titleFormat }</b>

      <div className='select-options-quiz--content'>
        { _.map(values, (item) => (
          <SelectOptionsAnswer
            key={ item.id }
            value={item}
            type={ optionType }
            active={isExist(item.id)}
            handler={handler}
          />
        )) }
      </div>
    </div>
  )
}

export default SelectOptionsQuiz
