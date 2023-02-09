import { Dots } from "../../components/dots"
import { ContainerPortifolio } from "./styles"
import ImageFundamentosReact from "./img/fundamentos.png"
import ImageDesafio01React from "./img/desafio01.png"
import ImageIgniteDS from "./img/igniteDS.png"
import ImageIgniteTime from "./img/igniteTime.png"

interface PortfolioProps {
    setedLanguage: string,
}

export function Portfolio({setedLanguage}: PortfolioProps){
    return(
        <ContainerPortifolio>
            <main>
                <h1>{setedLanguage == "PT-BR"? "PROJETOS": "PROJECTS"}</h1>
            </main>
            <a href="https://github.com/BernardoRh/ignite-ds" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="yellow" size="md"/>
                            <Dots color="pink" size="md"/>
                            <Dots color="blue" size="md"/>
                        </div>
                        <h3>IGNITE LAB - DESIGN SYSTEM</h3>
                    </div>
                    <div>
                        <img src={ImageIgniteDS}/>
                    </div>
                </div>
            </a>
            <a href="https://bernardorh.github.io/01-fundamentos-reactjs/" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="yellow" size="md"/>
                            <Dots color="blue" size="md"/>
                            <Dots color="pink" size="md"/>
                        </div>
                        <h3>IGNITE - {setedLanguage == "PT-BR" ? "FUNDAMENTOS REACT" : "REACT FUNDAMENTALS"} </h3>
                    </div>
                    <div>
                        <img src={ImageFundamentosReact}/>
                    </div>
                </div>
            </a>
            <a href="https://bernardorh.github.io/01-desafio-ignite-react/" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="blue" size="md"/>
                            <Dots color="yellow" size="md"/>
                            <Dots color="pink" size="md"/>
                        </div>
                        <h3>IGNITE - {setedLanguage == "PT-BR" ? "DESAFIO" : "CHALLENGE"} 01 (TO DO)</h3>
                    </div>
                    <div>
                        <img src={ImageDesafio01React}/>
                    </div>
                </div>
            </a>
            <a href="https://bernardorh.github.io/02-ignite-timer/" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="pink" size="md"/>
                            <Dots color="yellow" size="md"/>
                            <Dots color="blue" size="md"/>
                        </div>
                        <h3>IGNITE - {setedLanguage == "PT-BR" ? "TEMPORIZADOR" : "TIMER"}</h3>
                    </div>
                    <div>
                        <img src={ImageIgniteTime}/>
                    </div>
                </div>
            </a>
            <a href="#" target="_blank">
                <div>
                    <div>
                        <div>
                            <Dots color="yellow" size="md"/>
                            <Dots color="pink" size="md"/>
                            <Dots color="blue" size="md"/>
                        </div>
                        <h3>{setedLanguage == "PT-BR" ? "FICHA - ORDEM PARANORMAL RPG (EM ANDAMENTO)" : "SHEET - ORDEM PARANORMAL RPG (ONGOING)"}</h3>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/sgM4mrz.png"/>
                    </div>
                </div>
            </a>
        </ContainerPortifolio>
    )
}