import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../assets/images/pages/basket/arrow-left.svg'

export type PageHeaderProps = {
  title: string,
  backLink: string
}

const PageHeader: FC<PageHeaderProps> = (props) => {
  const {
    title,
    backLink
  } = props

  return (
    <div className="page-header">
      <Link to={backLink} className="page-header--link-btn">
        <ArrowLeft className="page-header--icon"/>
      </Link>

      <h1 className="page-header--title">{title}</h1>
    </div>
  )
}

export default PageHeader
