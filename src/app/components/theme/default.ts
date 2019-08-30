const colors = {
  primary: '#7159c1',
  secondary: '#9b49c1',
  default: '#fff',
  invert: '#000',
  error: '#ff4444',
}

const viewports = {
  smartphone: '360px',
  tablet: '720px',
  desktop: '1280px',
}

const typography = {
  fonts: {
    size: '16px',
    weight: {
      light: '300',
      regular: '500',
      bold: '700',
    },
    title: {
      fontSize: '30px',
    },
  },
}

const spacing = {
  unit: 8,
}

const theme = Object.freeze({
  colors,
  typography,
  spacing,
  viewports,
})

export default theme
