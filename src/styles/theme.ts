import {DefaultTheme} from 'styled-components'

const theme: DefaultTheme = {
    colors: {
        primary: '#f2f2f2',
    },
    textColors: {
        primary: '#333333',
        secondary: '#7d7cb9'
    },
    breakpoints: {
        sm: 'screen and (min-width: 640px)',
        md: 'screen and (min-width: 768px)',
        lg: 'screen and (min-width: 1024px)',
        xl: 'screen and (min-width: 1280px)'
    }
}

export default theme