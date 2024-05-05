
import { Certificades } from '../../_certificades/certificades'
import { TitlesLeft } from '../../_title/titlesLeft'
import { MyPhoto } from '../../card/my-photo'
import Ufclogo from '../../assets/ufclogo.png'
import EeepIcon from '../../assets/eeepIcon.png'
import RocketLogo from '../../assets/rocketlogo.png'
import { Tecnologias } from '../../card/tecnologias'
import './content.css'
import { Footer } from '../footer/footer'

export function Content() {



    const certificados = [
        {
            img: Ufclogo,
            titulo: 'Universidade Federal do Ceará',
            localizacao: 'Campus Crateús ( CE )',
            data: 'Data de realização: 2021.1 - em andamento...'
        },
        {
            img: EeepIcon,
            titulo: 'EEEP Deputado José Maria Melo - Ensino médio',
            localizacao: 'Guaraciaba do Norte ( CE )',
            data: 'Data de realização: 2017 - 2019'
        },
        {
            img: RocketLogo,
            titulo: 'NLW Unite - Nodejs',
            data: 'Data de emissão: 06/04/2024',
            plataforma: 'Plataforma: RocketSeat',
            link: 'https://app.rocketseat.com.br/certificates/b607be34-28e8-4887-a4c2-635dbf7a1175'
        },
        {
            img: RocketLogo,
            titulo: 'NLW Unite - Reactjs',
            data: 'Data de emissão: 06/04/2024',
            plataforma: 'Plataforma: RocketSeat',
            link: 'https://app.rocketseat.com.br/certificates/a97b7d68-9480-46f5-809e-8d8b7e129cd5'
        },
        {
            img: RocketLogo,
            titulo: 'NLW Unite - DevOps',
            data: 'Data de emissão: 07/04/2024',
            plataforma: 'Plataforma: RocketSeat',
            link: 'https://app.rocketseat.com.br/certificates/2bcfa83f-14b2-4290-b251-871a6a2daa4b'
        }
    ];

    return (
        <main className="main-content">
            <section className='section-cont-myName'>
                <div>
                    <h1 className="name-title">Oi, meu nome é</h1>
                </div>
                <div>
                    <h1 className="h1-name-title">Eric Albuquerque</h1>
                </div>
            </section>

            <section className='section-cont' id='sobre'>
                <div>
                    <TitlesLeft title='Sobre mim' />
                </div>
                <div className='about'>
                    <MyPhoto />
                    <p className='text-forMe'>
                        Meu nome é Eric, estudante universitário cursando ciência da computação,
                        gosto muito de desenvolvimento web. meu começo na área de desenvolvimento
                        começou em 2017, quando adentrei no ensino médio em um curso de tecnico em informática,
                        onde aprendi muito sobre HTML e CSS. Desde então venho me aprimorando,
                        desenvolvendo e buscando novas habilidades.<br /><br />
                        Tenho grande afeto também pela parte do desenvolvimento envolvendo o back-end,
                        realizar análise e testes, fazer consultas ao banco de dados e criar a lógica do
                        sistema é algo que me enche os olhos de vontade nessa área de dev.
                    </p>

                </div>
                <div className='container-columns-tecnologias'>
                    <h2 className='title-tecnologias'>Tecnologias que venho estudando e utilizando recentemente</h2>
                    <Tecnologias />
                </div>
            </section>
            <section className='section-cont' id='formacao'>
                <div>
                    <TitlesLeft title='Formação e certificados' />
                </div>

                {certificados.map((certificado, index) => (
                    <Certificades
                        key={index}
                        img={certificado.img}
                        titulo={certificado.titulo}
                        localizacao={certificado.localizacao}
                        data={certificado.data}
                        plataforma={certificado.plataforma}
                        link={certificado.link}
                    />
                ))}
                
            </section>

            <section className='section-cont'>
                <div>
                    <TitlesLeft title='Projetos' />
                </div>
            </section >

            <section className='section-cont'>
                <Footer />
            </section>
        </main>

    )
}