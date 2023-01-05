import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home'
import { Portfolio } from './pages/portfolio'
import { DefaultLayout } from './layouts/defaultLayout/indext';

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
            </Route>
        </Routes>
    );
}