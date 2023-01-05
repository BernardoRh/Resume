import { ContainerProgressBar, WrappProgressBar } from "./styles"

export interface propsProgressBar {
    percentage: number,
}

export function ProgressBar({percentage}: propsProgressBar){
    return(
        <WrappProgressBar>
            <ContainerProgressBar fillBar={percentage}>
                <span></span>
            </ContainerProgressBar>
            <p>{percentage + '%'}</p>
        </WrappProgressBar>
    )
}