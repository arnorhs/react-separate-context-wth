import { useContext, useEffect, useReducer } from 'react'
import { ctx, defaultState, reducer } from './context'

function SeparateState() {
  const state = useContext(ctx.state)
  console.log('separate state rendered')
  useEffect(() => console.log('separate state updated'), [state])
  return <p>{state.val}</p>
}

function SeparateDispatch() {
  const dispatch = useContext(ctx.dispatch)
  console.log('separate dispatch rendered')
  useEffect(() => console.log('separate dispatch updated'), [dispatch])
  return <button onClick={dispatch}>Increment</button>
}

function SeparateWrapper() {
  return (
    <>
      <h1>separate</h1>
      <SeparateState />
      <SeparateDispatch />
    </>
  )
}

export function Separate() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <ctx.state.Provider value={state}>
      <ctx.dispatch.Provider value={dispatch}>
        <SeparateWrapper />
      </ctx.dispatch.Provider>
    </ctx.state.Provider>
  )
}
