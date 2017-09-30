const compose = (headFn, ...fns) => fns.reduce(
  (acc, fn) => (...args) => acc(fn(...args)),
  headFn
)

export default compose
