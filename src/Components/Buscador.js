import React from 'react'

class Buscador extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg"/>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Buscar"/> 
                </div>  
            </div>
        );
    }
}

export default Buscador;