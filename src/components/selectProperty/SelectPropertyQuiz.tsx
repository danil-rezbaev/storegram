import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'
import BottomPopup from '../../components/bottomPopup/BottomPopup'
import { ProductItemPropertiesValues } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'

export type SelectPropertyQuizProps = {
  title: string,
  properties: ProductItemPropertiesValues[],
  priceChange: number,
  show: boolean,
  showHandle: (value: boolean) => void,
}

const SelectPropertyQuiz: FC<SelectPropertyQuizProps> = (props) => {
  const {
    title,
    priceChange,
    properties,
    show,
    showHandle
  } = props

  const handleClose = () => showHandle(false)

  return (
    <BottomPopup
      title={title}
      visible={show}
      visibleHandle={showHandle}
      className="select-property-quiz"
    >
      <div className='select-property-quiz--content'>
        <Button
          className="product-info--close-btn bg-white text-black border-0"
          onClick={handleClose}>
          <CloseIcon/>
        </Button>

        {properties.map((item) => (
          <SelectPropertyAnswer
            key={item.id}
            title={title} selected={false} priceChange={priceChange} type="radio"/>
        ))}
      </div>
    </BottomPopup>
  )
}

export default SelectPropertyQuiz
