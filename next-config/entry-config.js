/* eslint-disable no-param-reassign */
const entryConfig = (nextConfig = {}) => Object.assign({}, nextConfig, {
  webpack(config, options) {
    const { isServer } = options;

    if (isServer === false) {
      const entryFactory = config.entry;
      config.entry = () => (
        entryFactory()
          .then((entry) => {
            entry['main.js'] = [
              './lib/client-entry.js',
              ...entry['main.js'],
            ];
            return entry;
          })
      );
    }

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});

module.exports = entryConfig;
