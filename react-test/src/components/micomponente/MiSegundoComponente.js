import React from 'react';
import Button from "@cloudscape-design/components/button";

function MiSegundoComponente () {

	let strMensaje="Bienvenido al segundo componente de prueba de React";
    let elementos=["Lunes","Martes","Miércoles","Jueves","Viernes"];
    //let elementos=[];

	strMensaje+=".";

    if (elementos.length>0) {
        return (
            <div className="MiSegundoComponente">
                    <hr/>
                    <h2>Días de la semana:</h2>
                    <ul>
                        {
                            elementos.map((elemento,inx) => {
                                return <li key={inx}>{elemento}</li>;
                            })
                        }
                    </ul>
                    <Button>Ver calendario</Button>
                    <hr/>
            </div>
        );
    } else {
        return (
            <div className="MiSegundoComponente">
                    <hr/>
                    <h2>No hay calendario</h2>
                    <hr/>
            </div>
        );
    }
}

export default MiSegundoComponente;