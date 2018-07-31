/**
 * svgo config to be shared between the SVG optimisation script and Storybook
 */

const getSVGOConfig = ({ forIcons } = {}) => {
  const plugins = [
    { removeViewBox: false },
    { removeDimensions: true },
    { removeXMLNS: true },
    {
      convertPathData: {
        floatPrecision: 4,
      },
    },
    {
      cleanupIDs: {
        prefix: {
          // https://github.com/svg/svgo/issues/674#issuecomment-328774019
          toString() {
            this.counter = this.counter || 0

            return `id-${this.counter++}`
          },
        },
      },
    },
  ]

  // npm script use case (optimising SVGs for icon usage). For Storybook, we need
  // to skip `removeAttrs` because that would brake SVG illustrations.
  if (forIcons) {
    plugins.push({
      removeAttrs: { attrs: '(stroke|fill)' },
    })
  }

  return { plugins }
}

module.exports = {
  getSVGOConfig,
}
