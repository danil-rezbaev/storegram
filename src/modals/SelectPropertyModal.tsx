import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setFilled, visibleHandle } from '../store/propertyQuizSlice'
import SelectPropertyQuiz from '../components/selectProperty/SelectPropertyQuiz'
import _ from 'lodash'

export type SelectPropertyModalProps = unknown

const SelectPropertyModal: FC<SelectPropertyModalProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state.propertyQuizSlice)

  const {
    questions,
    visible,
    productId,
    index,
    length,
    filled
  } = store

  const handleClose = () => visibleHandler(false)

  const visibleHandler = useCallback((value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }, [])

  useEffect(() => {
    console.log('questions', questions)
  }, [questions])

  // const [quizList, setQuizList] = useState<Record<string, ProductItemOptions>>({})

  const [selected, setSelected] = useState<string[]>(_.keys(questions))
  const [count, setCount] = useState<number>(index)

  useEffect(() => {
    setCount(index)
  }, [index])

  const quizLength = useMemo(() => length, [length])

  const selectedHandle = useCallback((id: string | number, action: string): void => {
    const idFormat = id.toString()
    const isPropExist = _.find(selected, (item) => item === id)

    console.log('isPropExist', isPropExist)
    console.log('action', action)
    console.log('selected', selected)

    if (action === 'push') {
      dispatch(setFilled({ filled: false }))

      if (!isPropExist) {
        setSelected(value => {
          value.push(idFormat)
          return value
        })
      }
    } else if (action === 'remove') {
      dispatch(setFilled({ filled: true }))
      setSelected(value => value.filter((item) => item !== idFormat))
    }
  }, [selected])

  const nextButtonHandle = useCallback(() => {
    console.log('count\n' +
      'quizLength', count,
    quizLength)

    if (count === quizLength) {
      handleClose()
    } else {
      setCount(value => value + 1)
    }
  }, [])

  useEffect(() => {
    console.log('count', count)
    console.log('filled', filled)
  }, [count, filled])

  // useEffect(() => {
  //   console.log('selected', selected)
  //   dispatch(setFilled({ filled: selected.length > 0 }))
  // }, [selected])

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="select-property-quiz"
    >
      <div className='select-property-quiz--content'>
        <Button
          className="select-property-quiz--close-btn border-0"
          onClick={handleClose}>
          <CloseIcon/>
        </Button>

        {questions.map((item, index) => (
          <SelectPropertyQuiz
            key={item.id}
            {...item}
            productId={productId}
            show={count === index}
            selectedHandle={selectedHandle}
          />
        ))}

        {filled
          ? (
          <Button
            size="lg"
            variant="success"
            className="select-property-quiz--next-btn"
            onClick={nextButtonHandle}
          >
            Далее
          </Button>
            )
          : null }
      </div>
    </BottomPopup>
  )
}

export default SelectPropertyModal
