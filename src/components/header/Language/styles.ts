import styled from "styled-components";

export const ContainerLanguage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row !important;
    width: 6rem;
    border-radius: 8px;

    button {
        width: 3rem;
        background: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        
        img {
            object-fit: cover;
            border-radius: 8px;
            filter: gray saturate(0%) brightness(70%) contrast(1000%);

            &:hover {
                box-shadow: 1px 2px 3px ${props => props.theme['blue-dark-gray']};
                transition: 0.2s;
            }
        }
    }

    p {
        text-align: center;
        width: 100%;
        font-size: 0.75rem;
        color: ${props => props.theme['blue-dark-gray']};
    }
`