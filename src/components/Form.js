import emailjs from "emailjs-com";
import {useRef} from 'react';

function Form() {

  const form = useRef();
  function SendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5hbf15l",
        "template_kkqhl56",
        form.current,
        "DX16MZ5_aik04oM1_"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err.text));
  }

  return (
    <div className="container-fluid contacts padTop padBot">
      <section
        id="contacts"
        className="row justify-content-center topSmall contacts Four"
      >
        <div className="col-md-7 col-lg-8">
          <h4 className="text-6 contactosT text-center">Contactanos</h4>
          <hr className="line-3" />
          <form ref={form} className="p-4">
            <div className="row g-3">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Nombre"
                  name="name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Apellido"
                  name="last_name"
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Mail"
                  name="email"
                />
              </div>
              <div className="col-12 message">
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Mensage"
                  name="message"
                />
              </div>
            </div>
            <div className="d.flex text-center">
              <button onSubmit={SendMail} type="submit" className="send-btn btn  mt-4 mandar">
                Mandar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
