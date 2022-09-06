import Material from '../components/Material';

function SomosSuyas() {
  return (
        <div className='container padTop subpages padBot main'>
            <h3 className="subpagesh3 padTop">Somos Suyas</h3>
            <img alt='banner' className='img-fluid pagesBanner' src={require('../img/bannerSomosSuyas.png')}/>
            <p>Ut culpa qui ut culpa in. Id est officia dolor minim consequat mollit dolor et dolor pariatur. Quis ea consectetur nulla laborum laborum elit non. Voluptate enim culpa esse adipisicing occaecat ipsum consequat sit Lorem deserunt cillum cupidatat. Eiusmod anim pariatur tempor eu exercitation aliquip minim reprehenderit occaecat anim qui. Non est mollit excepteur adipisicing nulla laborum duis consectetur dolore aliquip minim aliquip culpa.</p>

            <div className="row">
                <div className="col ">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>

                <div className="col">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>
                
                <div className="col">
                    <img alt='somos suyas' src={require('../img/img.png')}/>
                </div>
            </div>

            <h3 className="subpagesh3 padTop">Próximo Encuentro</h3>
            <div className='row'>
                <div className='col'>
                    <h5 className='masinfoh5 text-right'>Fecha:</h5>
                    <h5 className='masinfoh5 text-right'>Lugar:</h5>
                    <h5 className='masinfoh5 text-right'>Inscripción:</h5>
                </div>

                <div className='col text-left'>
                    <h5 className='masinfoh5'>12 de Marzo 2022</h5>
                    <h5 className='masinfoh5'>KATO Café</h5>
                    <h5 className='masinfoh5'>link a form o evenbrite</h5>
                </div>
            </div>

            <Material
                title="Somos Suyas: Florecer"
                description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                link="https://www.youtube.com/"
            />
        </div>
    );
}

export default SomosSuyas;
