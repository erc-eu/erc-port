

import { ChevronRight } from "lucide-react";
import { Button } from "../../_buttons/button";
import './header.css'

export function Header() {

    return (
        <nav className="nav-header">
            <span className="span-header">E</span>
            <div className="container-buttons-header">
                <ChevronRight className="chevron-right" /><Button anchor="sobre">Sobre</Button>
                <ChevronRight className="chevron-right" /><Button anchor="formacao">Formação e certicações</Button>
            </div>
        </nav>
    )
}