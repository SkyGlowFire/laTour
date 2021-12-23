import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* scroll-behavior: smooth; */
    }

    #root{
        width: 100%;
        height: 100%;
    }

    body{
        font-family: 'Nunito Sans';
        font-size: 16px;
        color: ${(p) => p.theme.textColors.primary};
        width: 100%;
        max-height: 100vh;
        overflow-y: auto;
        /* min-height: 150vh; */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
        line-height: 1.3rem;
    }

    a{
        text-decoration: none;
        color: ${(p) => p.theme.textColors.secondary};
        font-size: 1rem;
        font-weight: 600;
    }

    h1, h2, h3{
        margin-bottom: 1rem;
        line-height: 1.6rem;
    }

    h1{
        color: ${(p) => p.theme.textColors.secondary};
        font-size: 1.5rem
    }

    h2{
        font-size: 1.3rem
    }

    br{
        line-height: 0.8rem;
    }
`;
export default GlobalStyles;
