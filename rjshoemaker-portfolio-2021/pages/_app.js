import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    denim: 'rgb(73, 112, 145)',
    salmon: 'rgb(244, 158, 145)',
    spruce: 'rgb(108, 197, 169)',
    seagrass: 'rgb(224, 233, 206)',
    aqua: 'rgb(39, 164, 221)',
    olive: 'rgb(206, 184, 98)',
    lime: 'rgb(154, 189, 59)',
    hotpink: 'rgb(235, 68, 140)'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
