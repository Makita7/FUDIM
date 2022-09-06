import DonateImg from '../img/heart-hug.png';

function Donation() {
    return (
        <div className="main">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8DC81" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,165.3C840,171,960,149,1080,128C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className="backgroundDonationTwo padBot">
                <div className="donMargin padBot">
                    <div className="row padTop">
                        <div className="col text-center">
                            <h1 className='padTop'>Donations</h1>
                            <ul className='list'>
                                <li>Ponete en contacto con nosotros para poder Donar</li><br/>
                                <li><a href='tel:+9 2616794942'>453453434134</a></li><br/>
                                <li><a href='mailto:gasdkgasdj@gmail.com'>gasdkgasdj@gmail.com</a></li><br/>
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