import Material from '../components/Material';

function SomosSuyas() {
    return (
        <div className='container padTop subpages padBot main mainTwo mainLarge'>
            <div className='mainpad'>
                <h3 className="subpagesh3 padTop">Somos Suyas</h3>
                <img alt='banner' className='img-fluid pagesBanner' src={require('../img/bannerSomosSuyas.png')}/>
                <p>Desayunos para mujeres que tienen como objetivo conectar con áreas de interés, levantando valores y ofreciendo equipamiento y formación que permitan producir un impacto positivo en la sociedad, entendiendo este desafío como una virtud moral y un principio social, que nos ayudará a superar la pobreza, la soledad y defender los derechos. Es un espacio que superando el individualismo busca trabajar para el bien común y acercar más a las mujeres entre sí y a Dios, Fuente de todo cambio y propósito capaz de dignificar a la mujer.</p>

                {/* <div className="row">
                    <div className="col ">
                        <img alt='somos suyas' src={require('../img/mejoresDarSmall1.png')}/>
                    </div>

                    <div className="col">
                        <img alt='somos suyas' src={require('../img/mejoresDarSmall2.png')}/>
                    </div>

                    <div className="col">
                        <img alt='somos suyas' src={require('../img/mejoresDarSmall3.png')}/>
                    </div>
                </div> */}

                {/* <h3 className="subpagesh3 padTop">Próximo Encuentro</h3> */}
                {/* <div className='row'>
                    <div className='col'>
                        <h5 className='masinfoh5 text-right'>Fecha:</h5>
                        <h5 className='masinfoh5 text-right'>Lugar:</h5>
                        <h5 className='masinfoh5 text-right'>Inscripción:</h5>
                    </div>

                    <div className='col text-left'>
                        <h5 className='masinfoh5'>17 Junio 2023</h5>
                        <h5 className='masinfoh5'>KATO Café</h5>
                    </div>
                </div> */}

                {/* <Material
                    title="Somos Suyas: Florecer"
                    description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                    link="https://www.youtube.com/"
                /> */}
                <h3 className="subpagesh3 padTop">Mas Información</h3>
                <a className='social' href='https://www.instagram.com/fudim.mendoza/'>
                    <svg className='icon' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                <h5 className='masinfoh5 text-center padTop'><a className='link' href='+54 9 2616 96-8769'>Contacto: +54 9 261 696-8769</a></h5>
            </div>
        </div>
    );
}

export default SomosSuyas;
