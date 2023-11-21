import React from 'react';
import PropTypes from 'prop-types';
import Button from "@cloudscape-design/components/button";

function MiTercerComponente ({Titulo,Calif}) {

	let strMensaje="Bienvenido al tercer componente de prueba de React";

	strMensaje+=".";

	return (
		<div className="MiTercerComponente">
			<h2>{strMensaje}</h2>
			<p>Título de la película: {Titulo}</p>
			<p>Calificación de la película: {Calif}</p>
		</div>
	);
}

MiTercerComponente.propTypes = {
	Titulo: PropTypes.string.isRequired,
	Calif: PropTypes.number.isRequired
}

export default MiTercerComponente;