import emailjs from "emailjs-com";

function Form() {
  function SendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mchbjmf",
        "template_rxwngth",
        e.target,
        "user_oZ_tmvc63Sh8IiWm8"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          <form className="p-4" onSubmit={SendMail}>
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
              <button type="submit" className="send-btn btn  mt-4 mandar">
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
