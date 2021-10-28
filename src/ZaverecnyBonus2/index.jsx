import React, { useState } from 'react'
import './kasicka.css'
import penizeUrl from './penize.svg'

// Vytváříš virtuální prasátko na střádání peněz.
// Občas máš nákupní horečku a potřebuješ prasátko vysypat.

// Zadání 1:
// Přichystej v komponentě `Kasicka` proměnnou pro počet uložených
// peněz s výchozí hodnotou podle prop proměnné `pocatecniStav`.

// Zadání 2:
// Prvním tlačítkem přidej pět a druhým nastav na nulu.

// Zadání 3:
// Počet peněz vypiš.

const Kasicka = ({ pocatecniStav }) => {
	const [state, setState] = useState(pocatecniStav);

	// const pridejtPet = () => {
	// 	setState(state + 5);
	// }

	// const vysipKasicku = () => {
	// 	setState(0);
	// }

	return (
		<div className="kasicka">
			<h3>
				<img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce:{' '}
				{state}
			</h3>
			<button onClick={() => setState(state + 5)}>přihodit pětikorunu</button> 
			<button onClick={() => setState(0)}>vysypat kasičku</button>
		</div>
	)
}

const ZaverecnyBonus2 = () => {
	return (
		<>
			{[0, 20, 50, 8].map((hodnota, i) => (
				<Kasicka pocatecniStav={hodnota} key={i} />
			))}
		</>
	)
}

export default ZaverecnyBonus2;
