import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        colors: {
            primary: string
        },
        textColors: {
            primary: string,
            secondary: string
        },
        breakpoints: {
            sm: string
            md: string
            lg: string
            xl: string
        }
    }
}