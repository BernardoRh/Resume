import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

import { LayoutContainer } from './styles'

interface LayoutProps {
    getSetedLanguage: (setedeLanguage: string) => void;
}

export function DefaultLayout({getSetedLanguage}: LayoutProps){
    const [language, setLanguage] = useState("PT-BR");

    function handleSetLanguage(setedLanguage: string) {
        setLanguage(setedLanguage);
        getSetedLanguage(setedLanguage);
    }

    return(
        <LayoutContainer>
            <Header getSetedLanguage={handleSetLanguage}/>
            <Outlet />
        </LayoutContainer>
    );
}