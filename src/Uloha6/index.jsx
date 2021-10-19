import React, { useState } from 'react'
import './ukol.css'

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ ukol }) => {
	const [state, setState] = useState(false);
	const [showButton, setShowButton] = useState(true);
	const handleClick = () => {
		setState(true);
		setShowButton(false);
	}

	return (
		<ul>
				<li className={state ? "ukol ukol--splnen" : "ukol"} >
					<span className="ukol__nazev">{ukol}</span>
					{showButton ? <button className="ukol__akce" onClick={handleClick}>splnit</button> : null}
				</li>
		</ul>
	)
}

const Uloha6 = () => {
	const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']

	return (
		<>
		{ukoly.map(ukol => <Ukol ukol = {ukol} key={ukol}/>)}
		</>
	)
}

export default Uloha6;
