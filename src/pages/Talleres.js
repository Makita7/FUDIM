import Material from '../components/Material';

function Taller(){
    return(
        <div className='container padTop padBot main'>
            <h3 className="subpagesh3 padTop">Próximo Taller</h3>
            <div className='row'>
                <table>
                    <tr>
                        <th className='text-right'>Nombre del Taller:</th>
                        <td className=''>Sobreviviendo a la Crianza</td>
                    </tr>
                    <tr>
                        <th className='text-right'>Fecha:</th>
                        <td>29 de Octubre 2022</td>
                    </tr>
                    <tr>
                        <th className='text-right'>Horario:</th>
                        <td>17 hs</td>
                    </tr>
                    <tr>
                        <th className='text-right'>Oradores:</th>
                        <td>Dr. Diego Pizzi y Dra. Rosana Tagliaferro (médicos psiquiatras)</td>
                    </tr>
                    <tr>
                        <th className='text-right'>Dirección:</th>
                        <td>Belgrano 413, Ciudad Mendoza</td>
                    </tr>
                    <tr>
                        <th className='text-right'>Inscripción:</th>
                        <td><a className='link' href='https://docs.google.com/forms/d/e/1FAIpQLSdkQ0Yz73V5_foT1o3sm9Lp-qIDX-HukytfXpeo9T01zORmQQ/closedform'>Link</a></td>
                    </tr>
                    <tr>
                        <th className='text-right'>Precio:</th>
                        <td>1 Entrada $600 || 2 Entradas $1000</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

function Talleres() {
    return (
        <div className='container padTop subpages padBot main'>
            <div className='mainpad'>
                <h3 className="subpagesh3">A tu Alcance</h3>
                <p>Talleres con temáticas específicas, de ayuda e interés general, los cuales son construidos sobre los principios y valores necesarios para fomentar gradualmente un cambio positivo en los distintos ámbitos de la sociedad. Buscan atender las necesidades apremiantes de este tiempo al ofrecer un espacio de capacitación y formación integral.</p>

                <div className="row">
                    <div className="col">
                        <img className='full' alt='talleres' src={require('../img/talleres1.png')}/>
                    </div>

                    <div className="col">
                        <img className='full' alt='talleres' src={require('../img/talleres2.png')}/>
                    </div>

                    <div className="col">
                        <img className='full' alt='talleres' src={require('../img/talleres3.png')}/>
                    </div>
                </div>
                {/* Poner el proximo taller  y el link al formulario para poder inscribirse */}
                <Taller/>

                {/* una vez que pase el taller subis el material */}
                {/* <Material
                    title="Nombre Taller"
                    description="Commodo fugiat do pariatur esse enim tempor voluptate ad occaecat magna proident tempor est laboris. Dolor irure eiusmod anim sunt. Mollit incididunt reprehenderit Lorem excepteur ullamco ullamco proident ea sit consequat velit. Id laboris et do proident mollit adipisicing do laborum commodo eu sint."
                    link="https://www.youtube.com/"
                    /> */}
            </div>
        </div>
    );
}

export default Talleres;