export function dataModel(initialValue) {
  return {
    data: initialValue,
    initialized: false,
    error: null,
    setData: function (data) {
      this.data = data;
    },
    setInitialized: function (initialized) {
      this.initialized = initialized;
    },
    setError: function (err) {
      this.error = err;
    }
  };
}