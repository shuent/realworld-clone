export const ALT_IMAGE_URL =
  'https://static.productionready.io/images/smiley-cyrus.jpg'

export const getLocalStorageValue = (key: string) => {
  const value = localStorage.getItem(key)
  if (!value) return null
  return JSON.parse(value)
}

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value))
}
