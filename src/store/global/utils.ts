import { GlobalState } from './globalSlice'

export const isGlobalState = (obj: any): obj is GlobalState => {
  if (!obj) return false

  const objAsGlobalState = obj as GlobalState
  return (objAsGlobalState.language !== undefined &&
    objAsGlobalState.currency !== undefined &&
    objAsGlobalState.theme !== undefined &&
    objAsGlobalState.totalPrice !== undefined)
}

export const saveStore = (state: GlobalState) => localStorage.setItem('global', JSON.stringify(state))
