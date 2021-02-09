const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    /* This is because imageSizes is only used when generating the 1x/2x/3x srcSet for layout="fixed" or layout="intrinsic".

    The deviceSizes are used for layout="responsive" and layout="fill" which generates a srcSet with all the device sizes. */
    imageSizes: [16, 32, 48, 64], // This array is concatenated to deviceSizes.
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Next.js default
    deviceSizes: [96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // default
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    modern: true,
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
