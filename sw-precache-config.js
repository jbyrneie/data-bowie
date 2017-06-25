module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  "runtimeCaching": [{
    "urlPattern": /^https:\/\/jobs.glgresearch.com\/data-bowie\/service-worker.js/,
    "handler": "networkFirst"
  }],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js'
};
