import { Navigate, useParams } from 'react-router-dom'
import { FC, useEffect } from 'react'
import { useGetStoreMutation } from '../../store/store/storeApi'
import { useAppSelector } from '../../hooks/redux'

export type IdentificationProps = unknown

const Identification: FC<IdentificationProps> = () => {
  const { id } = useParams()
  const [identifyStore] = useGetStoreMutation()
  const { status } = useAppSelector(store => store.storeInfo)

  const getStore = async () => {
    await identifyStore(id)
  }

  useEffect(() => {
    if (id) {
      getStore()
    }
  }, [])

  if (status === 'pending') {
    return (
      <>
        Идет загрузка
      </>
    )
  }

  return (
    <>
      { status === 'fulfilled'
        ? <Navigate to="/" />
        : 'Не удалось идентифицировать магазин'
      }
    </>
  )
}

export default Identification
