import { Dots } from "../../components/dots";
import { ProgressBar } from "../../components/progressBar";
import { ContainerCurriculum, ContainerContent, Contacts } from "./styles";
import Photo from './../../img/Bernardo-foto.png';
import { WhatsappLogo, InstagramLogo, Envelope, LinkedinLogo, GithubLogo } from 'phosphor-react'

interface HomeProps {
    setedLanguage: string,
}

export function Home({setedLanguage}: HomeProps){
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
                            <h4>{setedLanguage == "PT-BR" ? "DESENVOLVEDOR WEB" : "WEB DEVELOPER"}</h4>
                            <p>
                                {
                                    setedLanguage == "PT-BR"
                                    ?
                                    "Estou iniciando a carreira e aperfeiçoando as minhas habilidades. Possuo uma ótima capacidade de planejar e criar UI, trago um traço próprio de criatividade que me ajuda no aperfeiçoamento de meus projetos. Sou performático e focado, estando sempre antenado nas novas tecnologias. Possuo experiência em projetos, você pode conferir alguns deles disponíveis no meu portfólio."
                                    :
                                    "I’m starting my career and improving my skills. I won a grate capacity to plan and make UI, bring my own trait of creativity that helps me improve my projects. I’m performative and focused, being always tuned to new technologies. Own experience with projects, you can confer some of them available in my portfolio."
                                }
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
                            <Dots color="blue" size="md"></Dots>
                            <Dots color="pink" size="md"></Dots>
                            <Dots color="yellow" size="md"></Dots>
                        </div>
                        <div>
                            <h4>{setedLanguage == "PT-BR" ? "CONTATOS" : "CONTACTS" }</h4>
                            <Contacts>
                                <span>
                                    <a target="_blank" href="https://www.linkedin.com/in/bernardo-horbach-442222202/">
                                        <LinkedinLogo size={24} weight="fill" />
                                        Bernardo Horbach
                                    </a>
                                </span>
                                <span>
                                    <a href="mailto:bernardo.horbach@gmail.com" >
                                        <Envelope size={24} weight="bold"/>
                                        bernardo.horbach@gmail.com
                                    </a>
                                </span>
                                <span>
                                    <a target="_blank" href="https://github.com/BernardoRh/">
                                        <GithubLogo size={24} weight="fill" />
                                        BernardoRh
                                    </a>
                                </span>
                                <span>
                                    <a target="_blank" href="https://wa.me/qr/4SPTIQH64JRSN1">
                                        <WhatsappLogo size={24} weight="fill"/>
                                        (51) 99017-9621
                                    </a>
                                </span>
                                <span>
                                    <a target="_blank" href="https://www.instagram.com/bernardorh/">
                                        <InstagramLogo size={24} weight="fill" />
                                        bernardorh
                                    </a>
                                </span>
                            </Contacts>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Dots color="blue" size="sm"></Dots>
                            <Dots color="pink" size="sm"></Dots>
                            <Dots color="yellow" size="sm"></Dots>
                        </div>
                        <div>
                            <h4>{setedLanguage == "PT-BR" ? "EDUCAÇÃO" : "EDUCATION"}</h4>
                            <div>
                                <span>
                                    <h5>
                                        {
                                            setedLanguage == "PT-BR" ?
                                            "Curso Técnico de TI" :
                                            "Technical IT Course"
                                        }
                                    </h5>
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
                            <h4>{setedLanguage == "PT-BR" ? "CERTIFICAÇÕES" : "CERTIFICATIONS"}</h4>
                            <div>
                                <span>
                                    <h5>{setedLanguage == "PT-BR" ? "Curso de Manutenção de Hardware" : "Hardware Maintenance Course"}</h5>
                                    <p>
                                        Unialcance - Rolante / RS
                                    </p>
                                </span>
                                <span>
                                    <h5>
                                        {
                                            setedLanguage == "PT-BR" ?
                                            "Curso de Desenvolvimento Web Com ReactJS - Ignite (Em Andamento)" :
                                            "Web Develop Course With ReactJS - Ignite (Ongoing)"
                                        }
                                    </h5>
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
                            <h4>{setedLanguage == "PT-BR" ? "LINGUAS" : "LANGUAGES"}</h4>
                            <div>
                                <ul>
                                    <li>{setedLanguage == "PT-BR" ? "Português - 🇧🇷" : "Portuguese - 🇧🇷"}</li>
                                    <li>{setedLanguage == "PT-BR" ? "Inglês - 🇺🇸": "English - 🇺🇸"}</li>
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
                            <h4>{setedLanguage == "PT-BR" ? "HABILIDADES" : "SKILLS"}</h4>
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
                            <h4>{setedLanguage == "PT-BR" ? "EXPERIÊNCIAS PROFISSIONAIS" : "PROFESSIONAL EXPERIENCE"}</h4>
                            <div>
                                <span>
                                    <h5>Bruno Santoni Becker Papéis (2021-2022)</h5>
                                    <h6>{setedLanguage == "PT-BR" ? "Auxiliar de Escritório" : "Office Assistant"}</h6>
                                    <p>
                                        {
                                            setedLanguage == "PT-BR" ?
                                            "Auxiliar na preparação e desenvolvimento de propostas para licitações públicas, além de contribuir no controle de produção e qualidade."
                                            :
                                            "Assistant in preparation and development of proposal for public bids, besides contributing with the production control and quality"
                                        }
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div>
                            <span title="Inspirado por um layout do Canva">
                                <a target="_blank" href="https://www.canva.com/design/DAFNdk9UGk8/fQf3cW7k73rZtL6t1ZpDSg/view?utm_content=DAFNdk9UGk8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">LAYOUT</a>
                            </span>
                        </div>
                        <div>
                            <p>{setedLanguage == "PT-BR" ? "DESENVOLVEDOR WEB" : "WEB DEVELOPER"}</p>
                        </div>
                    </footer>
                </div>
            </ContainerContent>
        </ContainerCurriculum>
    )
}