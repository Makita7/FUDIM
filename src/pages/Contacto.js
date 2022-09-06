import Donation from "../components/Donation";
import Form from '../components/Form';

function Contacto() {
    return (
        <div className="spaceB">
            <Form/>
            <div className='fixContacts'>
                <Donation/>
            </div>
        </div>
    );
}

export default Contacto;