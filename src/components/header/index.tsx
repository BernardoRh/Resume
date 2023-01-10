import { NavLink } from 'react-router-dom';
import { HeaderContainer } from "./styles";
import { useState } from 'react';
import { Dots } from '../dots';

import LogoImage from './../../img/Marca.png';
import { Language } from './Language';

interface HeaderProps {
    getSetedLanguage: (setedeLanguage: string) => void;
}

export function Header({getSetedLanguage}: HeaderProps){

    const [language, setLanguage] = useState("PT-BR");

    function handleSetLanguage(setedLanguage: string) {
        setLanguage(setedLanguage);
        getSetedLanguage(setedLanguage);
    }

    return(
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Currículo">{language == "PT-BR" ? "CURRÍCULO" : 'RESUME'}</NavLink>
                <div>
                    <Language getSetedLanguage={handleSetLanguage}/>
                </div>
                <NavLink to="/portfolio" title="Portfólio">{language == "PT-BR" ? "PORTFÓLIO" : 'PORTFOLIO'}</NavLink>
            </nav>
        </HeaderContainer>
    );
}