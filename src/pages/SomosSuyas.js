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

                <h3 className="subpagesh3 padTop">Próximo Encuentro</h3>
                <div className='row'>
                    <div className='col'>
                        <h5 className='masinfoh5 text-right'>Fecha:</h5>
                        <h5 className='masinfoh5 text-right'>Lugar:</h5>
                        <h5 className='masinfoh5 text-right'>Inscripción:</h5>
                    </div>

                    <div className='col text-left'>
                        <h5 className='masinfoh5'>17 Septiembre 2022</h5>
                        <h5 className='masinfoh5'>KATO Café</h5>
                        <h5 className='masinfoh5'><a className='link' href='+54 9 2616 96-8769'>+54 9 2616 96-8769</a></h5>
                    </div>
                </div>

                {/* <Material
                    title="Somos Suyas: Florecer"
                    description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                    link="https://www.youtube.com/"
                /> */}
            </div>
        </div>
    );
}

export default SomosSuyas;
