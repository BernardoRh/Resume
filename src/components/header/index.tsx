import { NavLink } from 'react-router-dom';
import { HeaderContainer } from "./styles";
import { Dots } from '../dots';

import LogoImage from './../../img/Marca.png';

export function Header(){
    return(
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Currículo">Currículo</NavLink>
                <div>
                    <Dots size='md' color='pink'/>
                    <Dots size='md' color='blue'/>
                    <Dots size='md' color='yellow'/>
                </div>
                <NavLink to="/portfolio" title="Portfólio">Portifólio</NavLink>
            </nav>
        </HeaderContainer>
    );
}