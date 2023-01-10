import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { Portfolio } from './pages/portfolio'
import { DefaultLayout } from './layouts/defaultLayout/indext';
import { useState } from 'react';


export function Router(){
    const [language, setLanguage] = useState("PT-BR");

    function handleSetLanguage(setedLanguage: string) {
        setLanguage(setedLanguage);
    }

    return(
        <Routes>
            <Route path="/" element={<DefaultLayout getSetedLanguage={handleSetLanguage}/>}>
                <Route path="/" element={<Home setedLanguage={language}/>}/>
                <Route path="/portfolio" element={<Portfolio setedLanguage={language}/>}/>
            </Route>
        </Routes>
    );
}