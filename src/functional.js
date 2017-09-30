export const pipe = (headFn, ...fns) =>
  (...args) =>
    fns.length === 0 ? headFn(...args) : pipe(...fns)(headFn(...args))

export const compose = (...fns) => pipe(...fns.reverse())
