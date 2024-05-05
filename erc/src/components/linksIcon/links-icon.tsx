import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"

import './linksIcon.css'

export function LinksIcons() {
    return (
        <div className="containerLinks">
            <div className='cont'>
                <a href="https://www.linkedin.com/in/eric-albuquerque-b08087218/" target="_blank" className='linkButton' ><Linkedin /></a>
                <a href="https://github.com/erc-eu" target="_blank" className='linkButton'><Github /></a>
                <div className='div-vertical'></div>
            </div>
        </div>
    )
}