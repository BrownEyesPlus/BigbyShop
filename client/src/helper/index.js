// import { api } from '../api';

export const getCookie = (name, cookiesParam) => {
  let cookies = cookiesParam || (typeof document !== 'undefined' && document.cookie)
  const value = `; ${cookies}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts?.pop()?.split(';').shift()
}
