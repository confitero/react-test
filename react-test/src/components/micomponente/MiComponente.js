import React from "react";
import Button from "@cloudscape-design/components/button";

function MiComponente () {

	let strMensaje="Bienvenido al componente de prueba de React";

	strMensaje+=".";

	return (
		<div className="MiComponente">
            <hr/>
			<h2>Este es el nuevo componente</h2>
			<p>{strMensaje}</p>
            <Button>Hola!</Button>
			<hr/>
		</div>
	);
}

export default MiComponente;
