

function Material( props ) {
  return (
    <div className="padTop">
        <div className="row align-middle">
            
            <div className="col-3 text-center tryVertical">
                <h4 className="materialT">{props.title}</h4>
            </div>

            <div className="col-7 justify">
                {props.description}
            </div>

            <div className="col-2 text-center tryVertical">
                <a href={props.link} type="button" class="btn btn-outline-warning">Download</a>
            </div>

        </div>
    </div>
  );
}

export default Material;