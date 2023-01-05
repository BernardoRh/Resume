import { Dots } from "../../components/dots";
import { ProgressBar } from "../../components/progressBar";
import { ContainerCurriculum, ContainerContent } from "./styles";
import Photo from './../../img/Bernardo-foto.png';
import { WhatsappLogo, InstagramLogo, Envelope } from 'phosphor-react'


export function Home(){
    return(
        <ContainerCurriculum>
            <main>
                <div>
                    <Dots color="yellow" size="md"/>
                    <Dots color="blue" size="md"/>
                    <Dots color="pink" size="md"/>
                </div>
                <div>
                    <h1>BERNARDO RODRIGO HORBACH</h1>
                    <div>
                        <img
                            src="https://github.com/BernardoRh.png"
                        />
                        <div>
                            <h4>DESENVOLVEDOR WEB</h4>
                            <p>
                                Estou iniciando a carreira e aperfeiçoando as minhas habilidades.
                                Possuo uma ótima capacidade de planejar e criar UI, trago um traço próprio
                                de criatividade que me ajuda no aperfeiçoamento de meus projetos.
                                Sou performático e focado, estando sempre antenado nas novas tecnologias.
                                Possuo experiência em projetos, você pode conferir alguns deles disponíveis no meu portfólio.
                            </p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ContainerContent>
                <div>
                    <div>
                        <div>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="pink" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>Contatos</h4>
                            <div>
                                <span>
                                    <div>
                                        <WhatsappLogo size={32} weight="fill"/>
                                        (51) 99017-9621
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        <InstagramLogo size={32} weight="fill" />
                                        bernardorh
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        <Envelope size={32} weight="bold"/>
                                        bernardo.horbach@gmail.com
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="pink" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>ESCOLARIDADE</h4>
                            <div>
                                <span>
                                    <h5>Curso Técnico em TI Integrado</h5>
                                    <p>
                                        Instituto Federal RS - Campus Rolante
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                            <Dots color="pink" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>CERTIFICAÇÕES</h4>
                            <div>
                                <span>
                                    <h5>Curso de Manutenção de Hardware</h5>
                                    <p>
                                        Unialcance - Rolante / RS
                                    </p>
                                </span>
                                <span>
                                    <h5>Curso de Desenvolvimento Web - Ignite</h5>
                                    <p>
                                        Rocketseat
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div>
                    <div>
                            <Dots color="pink" size="sm"></Dots>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>LINGUAS</h4>
                            <div>
                                <ul>
                                    <li>Portugês - 🇧🇷</li>
                                    <li>Inglês - 🇺🇸</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Dots color="pink" size="sm"></Dots>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>HÁBILIDADES</h4>
                            <div>
                                <div>
                                    <div>
                                        <ul>
                                            <li>React</li>
                                            <li>Figma</li>
                                            <li>TypeScript</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ProgressBar percentage={53}/>
                                        <ProgressBar percentage={67}/>
                                        <ProgressBar percentage={60}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Dots color="yellow" size="md"></Dots>
                            <Dots color="blue" size="md"></Dots>
                            <Dots color="pink" size="md"></Dots>
                        </div>
                        <div>
                            <h4>EXPERIÊNCIAS PROFISSIONAIS</h4>
                            <div>
                                <span>
                                    <h5>Bruno Santoni Becker Papéis (2021-2022)</h5>
                                    <h6>Auxiliar de Escritório</h6>
                                    <ul>
                                        <li>
                                            Auxiliar na preparação e desenvolvimento de propostas para licitações públicas, além de
                                            contribuir no controle de produção e qualidade.
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerContent>
        </ContainerCurriculum>
    )
}