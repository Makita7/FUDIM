import { Link } from 'react-router-dom';

function Actividad(props) {
  return (
    <div className='row padTop'>

      <img alt='mas info' src={props.imgSmall} className="small padBot"/>
      <div className='col-3 bigScreen'>
          <img alt={props.actividad} src={props.img} className="activityImg" />
      </div>
      <div className='col-9 colAdjustFull'>
          <h4>{props.actividad}</h4>
          <p>{props.descripcion}</p>
          <Link to={props.to}>
            <img className='moreInfo' alt='mas info' src={require('../img/mas_info.png')}/>
          </Link>
      </div>

    </div>
  )
}


// Conectar esta parte de la app a firebase database para poder actualizar los recursos usados facilmente y sin necesidad de meterme al codigo

function NuestrasActividades() {
  return (
      <div className='padTop activities padBot activityW'>
          <h3 className='text-center allCaps'>Nuestras Actividades</h3>

          <Actividad
            actividad='Somos Suyas'
            img={require('../img/desayuno.png')}
            descripcion='Desayunos para mujeres que tienen como objetivo conectar con áreas de interés, levantando valores y ofreciendo equipamiento y formación que permitan producir un impacto positivo en la sociedad, entendiendo este desafío como una virtud moral y un principio social, que nos ayudará a superar la pobreza, la soledad y defender los derechos. Es un espacio que superando el individualismo busca trabajar para el bien común y acercar más a las mujeres entre sí y a Dios, Fuente de todo cambio y propósito capaz de dignificar a la mujer.'
            to='/somossuyas'
            imgSmall={require('../img/desayunoSmall.png')}
          />

          <Actividad
            actividad='A tu Alcance'
            img={require('../img/alcance.png')}
            descripcion='Talleres con temáticas específicas, de ayuda e interés general, los cuales son construidos sobre los principios y valores necesarios para fomentar gradualmente un cambio positivo en los distintos ámbitos de la sociedad. Buscan atender las necesidades apremiantes de este tiempo al ofrecer un espacio de capacitación y formación integral.'
            to='/atualcance'
            imgSmall={require('../img/alcanceSmall.png')}
          />

          <Actividad
            actividad='Escuela: Mauricio Lopez'
            img={require('../img/cole.png')}
            descripcion='Proyecto de Escuela que buscará promover una educación con valores cristianos para un desarrollo integral que potencie las capacidades y las inteligencias múltiples, por medio del compromiso activo de la institución, el estudiante y su familia.
            Nuestro aporte para la educación de Mendoza, un espacio sano y seguro para el desarrollo de las nuevas generaciones. Una iniciativa que surgirá en etapas,  un Jardín Maternal con salas de 1 a 3 años será la primera.'
            to='/escuela'
            imgSmall={require('../img/coleSmall.png')}
          />

          <Actividad
            actividad='Mejor es Dar'
            img={require('../img/dar.png')}
            descripcion='Área de servicio a la comunidad vinculada con la recepción, clasificación y entrega de donaciones en especies, alimentos, ropa y objetos nuevos o usados que puedan llegar a suplir las necesidades de otras personas, instituciones o fundaciones. Este espacio tiene como objetivo tender puentes de conexión y unir la disposición a dar de las personas con las necesidades específicas de otros. Ventas de garaje, ferias americanas o la desinteresada y generosa entrega de los recursos recibidos son algunas de las maneras en las cuales Mejor es Dar sirve a otros.'
            to='/mejoresdar'
            imgSmall={require('../img/darSmall.png')}
          />

      </div>
  );
}

export default NuestrasActividades;