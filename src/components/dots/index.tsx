import { ContainerDots } from "./styles"

export interface DotsProps {
    color: 'blue' | 'pink' | 'yellow',
    size: 'xsm' | 'sm' | 'md' | 'lg'
}

export function Dots({color, size}: DotsProps){
    return(
        <ContainerDots dotsColor={color} dotsSize={size}>
            
        </ContainerDots>
    )
}