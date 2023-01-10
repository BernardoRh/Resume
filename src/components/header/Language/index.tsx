import { useState } from 'react'
import { ContainerLanguage } from './styles'

interface LanguageProps {
    getSetedLanguage: (setedeLanguage: string) => void;
}

export function Language({getSetedLanguage}: LanguageProps) {
    const [language, setLanguage] = useState("PT-BR");

    function handleChangeLaguage(newLanguage: "PT-BR" | "EN-US") {
        setLanguage(newLanguage);
        getSetedLanguage(newLanguage);
    }

    return(
        <ContainerLanguage>
            <button onClick={() => handleChangeLaguage("PT-BR")}>
                <img
                    alt="Brazil"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
                />
            </button>
            <button onClick={() => handleChangeLaguage("EN-US")}>
                <img
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                />
            </button>
        </ContainerLanguage>
    )
}