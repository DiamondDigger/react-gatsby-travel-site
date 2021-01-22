import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboco', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @keyframes sideSlide {
        from{
            opacity: 0;
            transform: translateX(-500px)
        }
        to{
            opacity: 1;
            transform: translateX(0px)
        }
    }
    @keyframes topAndBottomSlide {
        from{
            opacity: 0;
            transform: translateY(-500px)
        }
        to{
            opacity: 1;
            transform: translateY(0px)
        }
    }
    @keyframes combineSlide {
        from{
            opacity: 0;
            transform: translate(-300px, -200px)
        }
        to{
            opacity: 1;
            transform: translate(0px, 0px)
        }
    }
`
