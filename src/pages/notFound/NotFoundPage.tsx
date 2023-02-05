import React from 'react'
import Page from '../../components/page/Page'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function NotFoundPage () {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const mainLink = () => {
    navigate('/')
  }

  return (
    <Page className="page--not-found">
      <h1>{t('notFound:title')}</h1>
      <h6>{t('notFound:description')}</h6>
      <Button
        className="mt-3"
        onClick={mainLink}
      >
        {t('notFound:buttons.link')}
      </Button>
    </Page>
  )
}

export default NotFoundPage
