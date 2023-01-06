import { Dots } from "../../components/dots"
import { ContainerPortifolio } from "./styles"
import ImageFundamentosReact from "./img/fundamentos.png"
import ImageDesafio01React from "./img/desafio01.png"

export function Portfolio(){
    return(
        <ContainerPortifolio>
            <main>
                <h1>PROJETOS</h1>
            </main>
            <a href="#" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="yellow" size="md"/>
                            <Dots color="blue" size="md"/>
                            <Dots color="pink" size="md"/>
                        </div>
                        <h3>FUNDAMENTOS REACT</h3>
                    </div>
                    <div>
                        <img src={ImageFundamentosReact}/>
                    </div>
                </div>
            </a>
            <a href="#" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="blue" size="md"/>
                            <Dots color="yellow" size="md"/>
                            <Dots color="pink" size="md"/>
                        </div>
                        <h3>DESAFIO 01 IGNITE</h3>
                    </div>
                    <div>
                        <img src={ImageDesafio01React}/>
                    </div>
                </div>
            </a>
        </ContainerPortifolio>
    )
}