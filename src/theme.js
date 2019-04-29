import Provider from './components/Provider'
import colors from './colors'

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans',
  font: 'IBM Plex Sans, sans-serif',
  monospace: 'IBM Plex Mono, monospace',
  colors: {
    text: colors.default,
    background: colors.bg,
    link: colors.red,
    code: colors.red,
    codeBackground: colors.bg,
  },
  h1: {
    marginTop: 0,
    fontSize: '1.8em',
  },
  h2: {
    marginTop: 0,
  },
  h3: {
    marginTop: 0,
  },
  Provider,
}
