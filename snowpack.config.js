/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  scripts: {
    'run:tsc': 'tsc --noEmit',
    'run:tsc::watch': '$1 --watch',
  },
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-babel'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
