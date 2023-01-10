import styled from "styled-components";

export const ContainerPortifolio = styled.div`
    max-width: 54rem;
    width: 54rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        max-width: 24rem;
    }

    main {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme['blue-dark-gray']};
        margin-bottom: 1.5rem;

        div {
            display: grid;
            grid-template-columns: 50%;
            width: 100%;
            background: ${props => props.theme['tab-blue-1000']};
            padding: 1rem;
            border-radius: 8px;
            gap: 0.75rem;
            border: 2px solid ${props => props.theme['blue-dark-gray']};
            outline: 1px solid ${props => props.theme['tab-blue-1000']};
            
            div {
                display: flex;
                flex-direction: row;
                border: none;
                outline: none;
                background: transparent;
                padding: 0;

                h3 {
                    width: 140%;
                    text-align: left;
                }
            }

            &:last-child {
                display: flex;
                flex-direction: column;
                border: 1px solid ${props => props.theme['blue-dark-gray']};
                grid-column-start: 1;
                grid-column-end: second;
                max-height: 22rem;
                overflow: hidden;

                img {
                    object-fit: cover;
                }
            }
        }
    }
`