import React, { FC, useMemo } from 'react'
import cs from 'classnames'
import _ from 'lodash'

export type CropTextProps = {
  title: string,
  number: number,
  className?: string
}

const CropText: FC<CropTextProps> = (props) => {
  const {
    title,
    number,
    className
  } = props

  const titleFormat = useMemo(() => {
    if (title.length < number) {
      return title
    }
    return `${_.slice(title, 0, number).join('')}...`
  }, [])

  return (
    <p className={cs('crop-text m-0', className)}>
      { titleFormat }
    </p>
  )
}

export default CropText
