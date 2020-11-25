import 'styled-components'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
  }
}

export const themeColors = {
  white: '#fff',
  black: '#000',
  green: '#82E0AA',
  yellow: '#FAD7A0',
  red: '#F1948A '
}

const theme: DefaultTheme = {
  colors: themeColors
}

export default theme
