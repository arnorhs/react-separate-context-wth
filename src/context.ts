import { createContext } from 'react'

export const defaultState = { val: 0 }

export const ctx = {
  shared: createContext({ state: defaultState, dispatch: () => {} }),
  state: createContext(defaultState),
  dispatch: createContext(() => {}),
}

export function reducer(state: typeof defaultState) {
  return { ...state, val: state.val + 1 }
}
