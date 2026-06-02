export const inputText = (text) => {
  return { type: "change", payload: text }
}

export const inputError = () => {
  return {type: 'errorSpace', payload: 'Задача не может быть пустой'}
}

export const inputZero = () => {
  return {type: 'zero'}
}

export const inputDeleteError = () => {
  return {type: 'detele_error'}
}

