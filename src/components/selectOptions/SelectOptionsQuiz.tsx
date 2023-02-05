import React, { FC, useCallback, useEffect, useState } from 'react'
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
    type,
    values
  } = options

  const { t } = useTranslation()

  const titleFormat = t('catalog:selectPropertyModal.selectProduct', { title: title.toLowerCase() })

  const [checkList, setCheckList] = useState<ProductItemOptionsValue[]>([])

  const isExist = useCallback((optionId: number, random: number | undefined): boolean => {
    console.log('random', random)
    const find = _.find(checkList, (item) => (item.id === optionId))
    return Boolean(find)
  }, [checkList])

  const handler = useCallback((value: ProductItemOptionsValue, type: Fields): void => {
    const result = isExist(value.id, Math.random())

    console.log('checkList handler', checkList)
    console.log('result', result)

    if (result) {
      setCheckList(array => _.filter(array, (item) => (
        item.id !== value.id
      )))
    } else {
      if (type === 'checkbox') {
        setCheckList(array => array ? [...array, value] : [value])
      }
      if (type === 'radio') {
        setCheckList([value])
      }
    }
  }, [checkList, isExist])

  // const uniqueId = `${id}-${title}`

  useEffect(() => {
    console.log('checkList', checkList)
    console.log('id 1', isExist(1, undefined))
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
            type={ type }
            active={isExist(item.id, undefined)}
            handler={handler}
          />
        )) }
      </div>
    </div>
  )
}

export default SelectOptionsQuiz
