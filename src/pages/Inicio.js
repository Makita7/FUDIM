import NuestrasActividades from './NuestrasActividades';
import Donation from '../components/Donation';
import QuienSomos from '../components/QuienSomos';

function Inicio() {
    return (
          <div className="main">
              {/* make an alternative image that is only viewed in mobile and hide this one so it is only visible for tablet and pc */}
              <img alt='banner' className='img-fluid' src={require('../img/bannerColegio.png')}/>
              
            <QuienSomos/>
            <NuestrasActividades/>
            <Donation/>
          </div>
      );
  }
  
  export default Inicio;