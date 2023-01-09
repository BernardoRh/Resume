import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${props => props.theme['tab-blue-800']};
        color: ${props => props.theme['blue-dark-gray']};
        font-family: 'Space Mono', monospace;
        font-weight: 400;
        font-size: 1rem;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme['blue-dark-gray']};
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme['tab-blue-800']};
        border: 1px solid ${props => props.theme['blue-dark-gray']};
    }

    @media (max-width: 768px) {
        html {
            font-size: 87%;
        }
    }
`