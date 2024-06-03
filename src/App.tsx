import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const defaultState = { val: 0 }

const ctx = {
  shared: createContext({ state: defaultState, dispatch: () => {} }),
  state: createContext(defaultState),
  dispatch: createContext(() => {}),
}

function reducer(state: typeof defaultState) {
  return { ...state, val: state.val + 1 }
}

export default function App() {
  return (
    <>
      <Shared />
      <Separate />
    </>
  )
}

function Shared() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <ctx.shared.Provider value={providerValue}>
      <h1>shared</h1>
      <SharedState />
      <SharedDispatch />
    </ctx.shared.Provider>
  )
}

function Separate() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <ctx.state.Provider value={state}>
      <ctx.dispatch.Provider value={dispatch}>
        <h1>separate</h1>
        <SeparateState />
        <SeparateDispatch />
      </ctx.dispatch.Provider>
    </ctx.state.Provider>
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
