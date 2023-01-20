import React, { FC, useCallback, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setCounter, visibleHandle } from '../store/optionsQuizSlice'
import SelectPropertyQuiz from '../components/selectProperty/SelectPropertyQuiz'
import _ from 'lodash'

export type SelectPropertyModalProps = unknown

const SelectPropertyModal: FC<SelectPropertyModalProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state.optionsQuiz)

  const {
    questions,
    visible,
    productId,
    questionCounter,
    questionLength
  } = store

  const visibleHandler = useCallback((visible: boolean): void => {
    dispatch(visibleHandle({ visible }))
  }, [])

  const handleClose = () => visibleHandler(false)

  const currentQuestion = useMemo(() => questions[questionCounter], [questions, questionCounter])
  const currentQuestionFilled = useMemo(() => currentQuestion?.filled, [currentQuestion])

  const [selected, setSelected] = useState<string[]>(_.keys(questions))

  const selectedHandle = useCallback((id: string | number, action: string): void => {
    const idFormat = id.toString()
    const isPropExist = _.find(selected, (item) => item === id)

    if (action === 'push') {
      if (!isPropExist) {
        setSelected(value => {
          value.push(idFormat)
          return value
        })
      }
    } else if (action === 'remove') {
      setSelected(value => value.filter((item) => item !== idFormat))
    }
  }, [selected])

  const nextButtonHandle = useCallback(() => {
    if (questionCounter < questionLength - 1) {
      dispatch(setCounter({ questionCounter: questionCounter + 1 }))
    } else if (questionCounter === questionLength - 1) {
      handleClose()
    }
  }, [questionCounter, questionLength])

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="modal select-property-quiz"
    >
      <div className='select-property-quiz--content'>
        <Button
          className="modal--close-btn select-property-quiz--close-btn border-0"
          onClick={handleClose}>
          <CloseIcon/>
        </Button>

        {questions.map((item, index) => (
          <SelectPropertyQuiz
            key={item.id}
            {...item}
            productId={productId}
            show={questionCounter === index}
            selectedHandle={selectedHandle}
          />
        ))}

       { currentQuestionFilled
         ? (
        <Button
          size="lg"
          variant="success"
          className="select-property-quiz--next-btn"
          onClick={nextButtonHandle}
        >
          Далее
        </Button>)
         : null }
      </div>
    </BottomPopup>
  )
}

export default SelectPropertyModal
