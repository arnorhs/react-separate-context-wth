# React context + reducer state update demonstration

I saw an article on the react docs recommending that the state and dispatch functions of a
`useReducer` can be put in separate context providers, as an optimization:

[React docs: put-state-and-dispatch-into-context](https://react.dev/learn/scaling-up-with-reducer-and-context#step-2-put-state-and-dispatch-into-context)

First off, I love the new react docs, and these articles are pretty thorough and great.

But I found this advice pretty strange, esp. given that when one of the values changes
the other one is also going to change - so I put together this repo as a demonstration of this.

Look in the dev console to see that in fact they are both getting rendered as much.

There is always the possibility that I misunderstood something or there are further optimizations
you can do to reap the benefits from this setup, but to me it seems like the kind of thing
that adds needless complexity for a minimal benefit (compared to eg. using `useMemo` in the
appropriate places) - and further makes things confusing for beginners who already have a
hard time grasping reducers & contexts in general.

## installation / running

```sh
bun install
bun run dev
```
