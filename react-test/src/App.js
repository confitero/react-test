import logo from './logo.svg';
//import './App.css';
import "@cloudscape-design/global-styles/index.css";
import Button from "@cloudscape-design/components/button";
import MiComponente from './components/micomponente/MiComponente';
import MiSegundoComponente from './components/micomponente/MiSegundoComponente';
import MiTercerComponente from './components/micomponente/MiTercerComponente';

function App() {

	var iCalif=18;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Esto es una prueba de React
					<br/>
					<Button>Hello!</Button>
				</p>
				<a
					className="App-link"
					href="http://localhost:3000"
					target="_self"
					rel="noopener noreferrer"
				>
					Refrescar
				</a>
				<MiComponente />
				<MiSegundoComponente />
				<MiTercerComponente Titulo="El Padrino" Calif={iCalif} />
			</header>
		</div>
	);
}

export default App;
