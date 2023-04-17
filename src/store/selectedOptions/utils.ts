import { SelectedOptionsType } from './selectedOptions'

export const saveStore = (state: SelectedOptionsType) => localStorage.setItem('basket', JSON.stringify(state))
