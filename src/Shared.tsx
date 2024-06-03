import { useContext, useEffect, useReducer } from 'react'
import { ctx, defaultState, reducer } from './context'

export function Shared() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <ctx.shared.Provider value={{ state, dispatch }}>
      <SharedWrapper />
    </ctx.shared.Provider>
  )
}

function SharedWrapper() {
  return (
    <>
      <h1>shared</h1>
      <SharedState />
      <SharedDispatch />
    </>
  )
}

function SharedState() {
  const { state } = useContext(ctx.shared)
  console.log('shared state rendered')
  useEffect(() => console.log('shared state updated'), [state])
  return <p>{state.val}</p>
}

function SharedDispatch() {
  const { dispatch } = useContext(ctx.shared)
  console.log('shared dispatch rendered')
  useEffect(() => console.log('shared dispatch updated'), [dispatch])
  return <button onClick={dispatch}>Increment</button>
}
