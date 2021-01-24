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
            transform: translateX(-300px)
        }
        to{
            opacity: 1;
            transform: translateX(0px)
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
    @keyframes combineSlideOtherSide {
        from{
            opacity: 0;
            transform: translate(300px, 200px)
        }
        to{
            opacity: 1;
            transform: translate(0px, 0px)
        }
    }

    @keyframes slideFromBottomButton {
        from {
            margin-top: 300%;
        }
        to {
            margin-top: 0;
        }
    }

    @keyframes slideFromRight {
        from {
            margin-left: 300%;
            width: 300%;
        }
        to {
            margin-left: 0;
            width: 100%;
        }
  }
`
