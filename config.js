/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
    components: {
      root: "src/components",
    },
  },
  extraAttributes: {
    table: {
      cellpadding: 0,
      cellspacing: 0,
      role: "presentation",
      style: "width: 100%; border-collapse: collapse;",
    },
  },
};
