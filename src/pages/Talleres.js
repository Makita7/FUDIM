import Material from '../components/Material';

function Taller(){
    return(
        <div className='container padTop subpages padBot main'>
            <h3 className="subpagesh3 padTop">Próximo Taller</h3>
            <div className='row'>
                <div className='col'>
                    <h5 className='masinfoh5 text-right'>Nombre del Taller:</h5>
                    <h5 className='masinfoh5 text-right'>Fecha:</h5>
                    <h5 className='masinfoh5 text-right'>Dirección:</h5>
                    <h5 className='masinfoh5 text-right'>Inscripción:</h5>
                    <h5 className='masinfoh5 text-right'>Descripción:</h5>
                </div>

                <div className='col text-left'>
                    <h5 className='masinfoh5'>Nutricion</h5>
                    <h5 className='masinfoh5'>12 de Marzo 2022</h5>
                    <h5 className='masinfoh5'>KATO Café</h5>
                    <h5 className='masinfoh5'>link a form o evenbrite</h5>
                    <h5 className='masinfoh5 justify'>Cillum cupidatat est id excepteur. Adipisicing id commodo in id incididunt dolor sint in excepteur sunt labore. Enim id veniam irure nostrud amet eiusmod do aliqua laboris. Occaecat ad amet Lorem commodo. Ex labore elit sunt labore officia cupidatat laborum deserunt veniam proident ex. Minim exercitation aliqua nostrud nulla id exercitation commodo cupidatat Lorem id elit nulla incididunt.</h5>
                </div>
            </div>
        </div>
    );
}

function Talleres() {
    return (
        <div className='container padTop subpages padBot main'>
            <h3 className="subpagesh3">A tu Alcance</h3>
            <p>Ut culpa qui ut culpa in. Id est officia dolor minim consequat mollit dolor et dolor pariatur. Quis ea consectetur nulla laborum laborum elit non. Voluptate enim culpa esse adipisicing occaecat ipsum consequat sit Lorem deserunt cillum cupidatat. Eiusmod anim pariatur tempor eu exercitation aliquip minim reprehenderit occaecat anim qui. Non est mollit excepteur adipisicing nulla laborum duis consectetur dolore aliquip minim aliquip culpa.</p>

            <div className="row">
                <div className="col ">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>

                <div className="col">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>
                
                <div className="col">
                    <img alt='talleres' src={require('../img/img.png')}/>
                </div>
            </div>
            {/* Poner el proximo taller  y el link al formulario para poder inscribirse */}
            <Taller/>

            <Material
                title="Nombre Taller"
                description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                link="https://www.youtube.com/"
                />

            <Material
                title="Nombre Taller2"
                description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                link="https://www.youtube.com/"
                />
        </div>
      );
  }
  
  export default Talleres;