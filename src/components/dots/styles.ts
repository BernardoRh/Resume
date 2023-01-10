import styled from "styled-components";

const DOTS_SIZE = {
    'xsm': '0.5rem',
    'sm': '1rem',
    'md': '1.5rem',
    'lg': '2rem',
} as const

const DOTS_COLOR = {
    'blue': 'tab-blue-1000',
    'yellow': 'tab-yellow',
    'pink': 'tab-pink',
} as const

interface propsDotsColor {
    dotsColor: keyof typeof DOTS_COLOR,
    dotsSize: keyof typeof DOTS_SIZE
}

export const ContainerDots = styled.span<propsDotsColor>`
    color: transparent;
    width: ${props => DOTS_SIZE[props.dotsSize]};
    height: ${props => DOTS_SIZE[props.dotsSize]};
    background: ${props => props.theme[DOTS_COLOR[props.dotsColor]]};
    border: 2px solid ${props => props.theme['blue-dark-gray']};
    border-radius: 50%;
    cursor: default;
`