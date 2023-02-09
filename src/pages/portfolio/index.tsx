import { Dots } from "../../components/dots"
import { ContainerPortifolio } from "./styles"

interface PortfolioProps {
    setedLanguage: string,
}

const projects = [
    {
        title: {
            before: "IGNITE LAB - DESIGN SYSTEM",
            ptbr: "",
            enus: "",
            after: "",
        },
        link: "https://github.com/BernardoRh/ignite-ds",
        dotsColor: {
            first: "yellow",
            second: "pink",
            third: "blue"
        } as const,
        image: "https://i.imgur.com/OP2y3O6.png",
    },
    {
        title: {
            before: "IGNITE - ",
            ptbr: "FUNDAMENTOS REACT",
            enus: "REACT FUNDAMENTALS",
            after: "",
        },
        link: "https://bernardorh.github.io/01-fundamentos-reactjs/",
        dotsColor: {
            first: "pink",
            second: "yellow",
            third: "blue"
        } as const,
        image: "https://i.imgur.com/92PyeQt.png",
    },
    {
        title: {
            before: "IGNITE - ",
            ptbr: "DESAFIO",
            enus: "CHALLENGE",
            after: " 01 (TO DO)",
        },
        link: "https://bernardorh.github.io/01-desafio-ignite-react/",
        dotsColor: {
            first: "blue",
            second: "pink",
            third: "yellow"
        } as const,
        image: "https://i.imgur.com/Us6JxFL.png",
    },
    {
        title: {
            before: "IGNITE - ",
            ptbr: "TEMPORIZADOR",
            enus: "TIMER",
            after: ""
        },
        link: "https://bernardorh.github.io/02-ignite-timer/",
        dotsColor: {
            first: "yellow",
            second: "blue",
            third: "pink"
        } as const,
        image: "https://i.imgur.com/W0Rdor8.png",
    },
    {
        title: {
            before: "",
            ptbr: "FICHA - ORDEM PARANORMAL RPG (EM ANDAMENTO)",
            enus: "SHEET - ORDEM PARANORMAL RPG (ONGOING)",
            after: ""
        },
        link: "#",
        dotsColor: {
            first: "pink",
            second: "yellow",
            third: "blue"
        } as const,
        image: "https://i.imgur.com/sgM4mrz.png",
    },
]

export function Portfolio({setedLanguage}: PortfolioProps){
    return(
        <ContainerPortifolio>
            <>
                <main>
                    <h1>{setedLanguage == "PT-BR"? "PROJETOS": "PROJECTS"}</h1>
                </main>
                {projects.map(project => {
                    return(
                        <a href={project.link} target="_blank">
                            <div>
                                <div>
                                    <div>
                                        <Dots color={project.dotsColor.first} size="md"/>
                                        <Dots color={project.dotsColor.second} size="md"/>
                                        <Dots color={project.dotsColor.third} size="md"/>
                                    </div>
                                    <h3>
                                        {project.title.before}
                                        {setedLanguage == "PT-BR"?
                                            project.title.ptbr : 
                                            project.title.enus 
                                        }
                                    </h3>
                                </div>
                                <div>
                                    <img src={project.image}/>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </>
        </ContainerPortifolio>
    )
}