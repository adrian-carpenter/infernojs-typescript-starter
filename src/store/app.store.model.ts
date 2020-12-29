export interface Action<T, U = undefined> {
  readonly type: T
  payload?: U
}

export interface DataModel<T> {
  data: T
  initialized: boolean
  error: Error | null

  setData(val: T): void

  setInitialized(val: boolean): void

  setError(val: Error | null): void
}

export function dataModel<T>(initialValue: T): DataModel<T> {
  return {
    data: initialValue,
    initialized: false,
    error: null,
    setData: function (data) {
      this.data = data
    },
    setInitialized: function (initialized) {
      this.initialized = initialized
    },
    setError: function (err) {
      this.error = err
    },
  }
}
