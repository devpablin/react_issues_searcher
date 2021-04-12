import { START_LOADING, STOP_LOADING } from '../types'
export const startLoading = () => {
  return {
    type: START_LOADING,
    data: true,
  }
}
export const stopLoading = (error?:string) => {
  return {
    type: STOP_LOADING,
    data: false,
    message: error?error:''
  }
}
