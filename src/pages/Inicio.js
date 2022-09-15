import NuestrasActividades from './NuestrasActividades';
import Donation from '../components/Donation';
import QuienSomos from '../components/QuienSomos';

function Inicio() {
    return (
          <div className="main">
              {/* make an alternative image that is only viewed in mobile and hide this one so it is only visible for tablet and pc */}
              <img alt='banner' className='banner cellDisappear' src={require('../img/banner.png')}/>
              <img alt='banner' className='banner cellAppear bannerSmall' src={require('../img/bannerHomeCell.png')}/>
            <QuienSomos/>
            <NuestrasActividades/>
            <Donation/>
          </div>
      );
  }

  export default Inicio;