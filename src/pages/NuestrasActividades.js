import { Link } from 'react-router-dom';

function Actividad(props) {
  return (
    <div className='row padTop'>

      <img alt='mas info' src={props.imgSmall} className="small padBot"/>
      <div className='col-3 big'>
          <img alt={props.actividad} src={props.img} className="activityImg" />
      </div>
      <div className='col-9 col-md-12'>
          <h4>{props.actividad}</h4>
          <p>{props.descripcion}</p>
          <Link to={props.to}>
            <img className='moreInfo big' alt='mas info' src={require('../img/mas_info.png')}/>
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

          {/* <Actividad
            actividad='Escuela: Mauricio Lopez'
            img={require('../img/cole.png')}
            descripcion='Minim laboris ex do irure amet nulla laboris non. Amet consectetur aute eu nulla aliquip ad. Amet sunt excepteur nostrud tempor mollit laboris. Anim commodo officia excepteur laboris do ea. Minim enim cupidatat ea deserunt mollit exercitation elit quis. Nulla adipisicing tempor laborum enim eu enim.'
            to='/escuela'
            imgSmall={require('../img/coleSmall.png')}
          /> */}

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