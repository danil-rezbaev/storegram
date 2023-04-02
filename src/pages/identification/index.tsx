import { Navigate, useParams } from 'react-router-dom'
import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { fetchGetStore } from '../../store/storeSlice'

export type IdentificationProps = unknown

const Identification: FC<IdentificationProps> = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchGetStore({ id }))
    }
  }, [])

  return <Navigate to="/" />
}

export default Identification
