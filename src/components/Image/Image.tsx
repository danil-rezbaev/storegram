import React, { FC } from 'react'
import { REACT_APP_SERVER_URL } from '../../const'
import templateImage from '../../assets/images/pages/catalog/noImage.png'

export type ImageProps = {
  image?: string,
  className?: string
}

const Image: FC<ImageProps> = (props) => {
  const {
    image,
    className
  } = props

  return (
    <img
      src={image ? `${REACT_APP_SERVER_URL}/${image}` : undefined}
      className={className}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = templateImage
      }}
      alt=""
    />
  )
}

export default Image
