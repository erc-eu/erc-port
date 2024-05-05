
import './certificades.css'

interface Certificades {
    titulo?: string;
    localizacao?: string;
    data?: string;
    plataforma?: string;
    link?: string;
    img: string;
}

export function Certificades(props: Certificades) {
    return (
        <div className='container-certificades '>
            <div className='container-img'>
                <img className='img-certificades' src={props.img} />
            </div>
            <div className='container-certificades-names'>
                <h2 className='text-certificades-titulo'>{props.titulo}</h2>
                <h2 className='text-certificades'>{props.localizacao}</h2>
                <h2 className='text-certificades'>{props.data}</h2>
                <h2 className='text-certificades'>{props.plataforma}</h2>
                <a href={props.link} target='_blank' className='text-link'>{props.link}</a>
            </div>
        </div>
    )
}

// <div className="p-5 pt-10 flex ">
// <img className='w-52 h-32' src={props.img} alt="" />
// <div className="flex flex-col">
//     <h2 className="text-gray-300 text-[30px] mx-12 font-Inconsolata">{props.titulo}</h2>
//     <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.localizacao}</h3>
//     <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.data}</h3>
//     <h3 className="text-gray-400 text-[15px] mx-12 font-Inconsolata">{props.plataforma}</h3>
//     <a href={props.link} target="_blank" className="text-red-400 text-[15px] mx-12 font-Inconsolata">{props.link}</a>
// </div>
// </div>