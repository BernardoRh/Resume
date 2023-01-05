import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        gap: 4rem;
        background: ${props => props.theme['tab-blue-1000']};

        a {
            color: ${props => props.theme['tab-blue-200']};
            text-decoration: none;
            font-size: 1.25rem;
            font-weight: 800;
            border-bottom: 3px solid transparent;
        }

        a:hover:first-child {
            color: ${props => props.theme['tab-pink']};
            border-bottom: 3px solid ${props => props.theme['tab-pink']};
        }

        a:hover:last-child {
            color: ${props => props.theme['tab-yellow']};
            border-bottom: 3px solid ${props => props.theme['tab-yellow']};
        }

        div {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            flex-direction: row;
        }
    }
`