import styled from "styled-components";

interface progressStatus {
    fillBar: number,
}

export const WrappProgressBar = styled.div`
    display: flex;
    flex-direction: row !important;
`

export const ContainerProgressBar = styled.div<progressStatus>`
    height: 1rem;
    width: auto !important;

    span {
        display: flex;
        overflow: hidden;
        width: 5rem;
        height: 1rem;
        border: 1px solid ${props => props.theme['blue-dark-gray']};
        background-color: ${props => props.theme['blue-dark-gray']};
        border-radius: 12px;

        &::before {
            content: '';
            width: ${props => props.fillBar + '%'};
            background: ${props => props.theme['tab-blue-1000']};
        }
    }
`