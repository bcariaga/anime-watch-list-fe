import React from 'react'

const PASSWORDS_MUST_BE_EQUALS_MSG = 'passwords must be equals'

interface SignUpFormState {
  email: string
  password: string
  repeatPassword: string
  errors: {
    email?: string
    password?: string
    repeatPassword?: string
  }
}

enum ActionType {
  ChangeInput,
  SetError,
}
type Action = {
  type: ActionType
  payload: {
    fieldName: keyof Omit<SignUpFormState, 'errors'>
    value: string | undefined
  }
}

function reducer(state: SignUpFormState, { type, payload }: Action): SignUpFormState {
  switch (type) {
    case ActionType.ChangeInput: {
      return { ...state, [payload.fieldName]: payload.value }
    }
    case ActionType.SetError: {
      return { ...state, errors: { ...state.errors, [payload.fieldName]: payload.value } }
    }
    default:
      return state
  }
}
const initialState: SignUpFormState = {
  email: '',
  password: '',
  repeatPassword: '',
  errors: {},
}

export const useSignupForm = () => {
  const [{ email, password, repeatPassword, errors }, dispatch] = React.useReducer(
    reducer,
    initialState,
  )
  const handleInputChange =
    (fieldName: keyof Omit<SignUpFormState, 'errors'>) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: ActionType.ChangeInput, payload: { fieldName, value: e.target.value } })

  const passwordsAreNotEquals = React.useMemo(
    () => password !== '' && repeatPassword !== '' && password !== repeatPassword,
    [password, repeatPassword],
  )

  React.useEffect(() => {
    const value = passwordsAreNotEquals ? PASSWORDS_MUST_BE_EQUALS_MSG : undefined
    dispatch({ type: ActionType.SetError, payload: { fieldName: 'password', value } })
    dispatch({ type: ActionType.SetError, payload: { fieldName: 'repeatPassword', value } })
  }, [passwordsAreNotEquals])

  const isValid = React.useMemo<boolean>(() => {
    const hasErrors =
      errors?.email !== undefined ||
      errors?.password !== undefined ||
      errors?.repeatPassword !== undefined
    const allFieldsHasValues = email !== '' && password !== '' && repeatPassword !== ''
    return !hasErrors && allFieldsHasValues
  }, [email, password, repeatPassword, errors])

  return {
    handleInputChange,
    isValid,
    email,
    password,
    repeatPassword,
    errors,
  }
}
