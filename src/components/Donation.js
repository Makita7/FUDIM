import DonateImg from '../img/donation-box.png';

function Donation() {
  return (
    <div className="main">
        <img alt="background Donation" src={require("../img/leafBC.png")} className="backgroundDonation" />
        <div className="backgroundDonationTwo padBot">
            <div className="donMargin padBot">
                
                <div className="row padTop">
                    <div className="col text-center">
                        <h1 className='padTop'>Donations</h1>
                        <ul className='list'>
                            <li>Para donar podras contactarte con : nombre nombre</li><br/>
                            <li>para dar tu donacion</li><br/>
                            <li> Numero: <a href='tel:+9 2616794942'>453453434134</a></li><br/>
                            <li>Mail: <a href='mailto:gasdkgasdj@gmail.com'>gasdkgasdj@gmail.com</a></li><br/>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <div className='cont'>
                            <img alt='donate' className='donatebox text.center' src={DonateImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Donation;