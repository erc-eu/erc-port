import { ComponentProps } from "react";


interface TitleLeftProps extends ComponentProps<'h2'> {
    title: string;
}

import './titlesLeft.css'
export function TitlesLeft(props: TitleLeftProps) {
    return (
        <div className="div-title">
            <h2 className="h2-cont">{props.title} </h2><h2 className="h2-line"></h2>
        </div>

    )
}